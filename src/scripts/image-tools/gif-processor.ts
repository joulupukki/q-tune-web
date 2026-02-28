import { parseGIF, decompressFrames } from 'gifuct-js';
import { GIFEncoder, quantize, applyPalette } from 'gifenc';

export interface GifResult {
  blob: Blob;
  width: number;
  height: number;
}

type ProgressCallback = (percent: number, text: string) => void;

function yieldToUI(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

interface DecodedFrame {
  patch: ImageData;
  left: number;
  top: number;
  width: number;
  height: number;
  delay: number;
  disposalType: number;
}

type Encoder = ReturnType<typeof GIFEncoder>;

function encodeFrame(
  encoder: Encoder,
  rgba: Uint8ClampedArray,
  width: number,
  height: number,
  delay: number,
  dispose: number,
) {
  // Detect transparency
  let hasTransparency = false;
  for (let i = 3; i < rgba.length; i += 4) {
    if (rgba[i] < 128) {
      hasTransparency = true;
      break;
    }
  }

  // Copy so we can normalize transparent pixels without mutating the source
  const data = new Uint8ClampedArray(rgba);

  if (hasTransparency) {
    // Force all transparent pixels to identical RGB so they share one palette entry
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 128) {
        data[i] = 0;
        data[i + 1] = 0;
        data[i + 2] = 0;
        data[i + 3] = 0;
      }
    }
  }

  const palette = quantize(data, 256);
  const index = applyPalette(data, palette);

  const opts: Record<string, unknown> = { palette, delay, dispose };

  if (hasTransparency) {
    // Find which palette index the transparent pixels were mapped to
    let transpIdx = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 128) {
        transpIdx = index[i / 4];
        break;
      }
    }

    // gifenc uses two separate options: `transparent` (boolean flag) and
    // `transparentIndex` (palette index). Additionally, gifenc's own code
    // has `transparentIndex || 0x00` which treats index 0 as falsy.
    // To work around both issues, if the transparent color landed at
    // palette index 0, swap it to index 1.
    if (transpIdx === 0) {
      const tmp = palette[0];
      palette[0] = palette[1];
      palette[1] = tmp;
      for (let j = 0; j < index.length; j++) {
        if (index[j] === 0) index[j] = 1;
        else if (index[j] === 1) index[j] = 0;
      }
      transpIdx = 1;
    }

    opts.transparent = true;
    opts.transparentIndex = transpIdx;
  }

  encoder.writeFrame(index, width, height, opts);
}

function decodeGif(buffer: ArrayBuffer): {
  frames: DecodedFrame[];
  width: number;
  height: number;
} {
  const parsed = parseGIF(buffer);
  const frames = decompressFrames(parsed, true);
  const { width, height } = parsed.lsd;
  return {
    frames: frames.map((f) => ({
      patch: new ImageData(
        new Uint8ClampedArray(f.patch),
        f.dims.width,
        f.dims.height,
      ),
      left: f.dims.left,
      top: f.dims.top,
      width: f.dims.width,
      height: f.dims.height,
      delay: f.delay,
      disposalType: f.disposalType,
    })),
    width,
    height,
  };
}

export async function resizeGif(
  buffer: ArrayBuffer,
  maxDim: number,
  onProgress?: ProgressCallback,
): Promise<GifResult> {
  const { frames, width, height } = decodeGif(buffer);

  if (frames.length === 1) {
    return processSingleFrameResize(frames[0], width, height, maxDim);
  }

  const scale = maxDim / Math.max(width, height);
  const outW = Math.round(width * scale);
  const outH = Math.round(height * scale);

  // Full-size compositing canvas
  const compCanvas = document.createElement('canvas');
  compCanvas.width = width;
  compCanvas.height = height;
  const compCtx = compCanvas.getContext('2d')!;

  // Output-sized canvas
  const outCanvas = document.createElement('canvas');
  outCanvas.width = outW;
  outCanvas.height = outH;
  const outCtx = outCanvas.getContext('2d')!;

  const encoder = GIFEncoder();

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];

    // Composite frame patch onto full canvas
    const patchCanvas = document.createElement('canvas');
    patchCanvas.width = frame.width;
    patchCanvas.height = frame.height;
    const patchCtx = patchCanvas.getContext('2d')!;
    patchCtx.putImageData(frame.patch, 0, 0);
    compCtx.drawImage(patchCanvas, frame.left, frame.top);

    // Scale composited result to output canvas
    outCtx.clearRect(0, 0, outW, outH);
    outCtx.drawImage(compCanvas, 0, 0, outW, outH);

    const imageData = outCtx.getImageData(0, 0, outW, outH);
    encodeFrame(
      encoder,
      imageData.data,
      outW,
      outH,
      frame.delay,
      frame.disposalType === 2 ? 2 : 0,
    );

    // Handle disposal
    if (frame.disposalType === 2) {
      compCtx.clearRect(frame.left, frame.top, frame.width, frame.height);
    } else if (frame.disposalType === 3) {
      compCtx.clearRect(frame.left, frame.top, frame.width, frame.height);
    }

    if (onProgress) {
      onProgress(
        ((i + 1) / frames.length) * 100,
        `Processing frame ${i + 1} of ${frames.length}`,
      );
    }
    await yieldToUI();
  }

  encoder.finish();
  const output = encoder.bytes();
  const blob = new Blob([output], { type: 'image/gif' });
  return { blob, width: outW, height: outH };
}

export async function cropGif(
  buffer: ArrayBuffer,
  cropX: number,
  cropY: number,
  cropW: number,
  cropH: number,
  onProgress?: ProgressCallback,
): Promise<GifResult> {
  const { frames, width, height } = decodeGif(buffer);

  if (frames.length === 1) {
    return processSingleFrameCrop(
      frames[0],
      width,
      height,
      cropX,
      cropY,
      cropW,
      cropH,
    );
  }

  const outW = Math.round(cropW);
  const outH = Math.round(cropH);

  // Full-size compositing canvas
  const compCanvas = document.createElement('canvas');
  compCanvas.width = width;
  compCanvas.height = height;
  const compCtx = compCanvas.getContext('2d')!;

  // Cropped output canvas
  const outCanvas = document.createElement('canvas');
  outCanvas.width = outW;
  outCanvas.height = outH;
  const outCtx = outCanvas.getContext('2d')!;

  const encoder = GIFEncoder();

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];

    const patchCanvas = document.createElement('canvas');
    patchCanvas.width = frame.width;
    patchCanvas.height = frame.height;
    const patchCtx = patchCanvas.getContext('2d')!;
    patchCtx.putImageData(frame.patch, 0, 0);
    compCtx.drawImage(patchCanvas, frame.left, frame.top);

    // Draw crop region from composited canvas
    outCtx.clearRect(0, 0, outW, outH);
    outCtx.drawImage(
      compCanvas,
      cropX,
      cropY,
      cropW,
      cropH,
      0,
      0,
      outW,
      outH,
    );

    const imageData = outCtx.getImageData(0, 0, outW, outH);
    encodeFrame(
      encoder,
      imageData.data,
      outW,
      outH,
      frame.delay,
      frame.disposalType === 2 ? 2 : 0,
    );

    if (frame.disposalType === 2) {
      compCtx.clearRect(frame.left, frame.top, frame.width, frame.height);
    } else if (frame.disposalType === 3) {
      compCtx.clearRect(frame.left, frame.top, frame.width, frame.height);
    }

    if (onProgress) {
      onProgress(
        ((i + 1) / frames.length) * 100,
        `Processing frame ${i + 1} of ${frames.length}`,
      );
    }
    await yieldToUI();
  }

  encoder.finish();
  const output = encoder.bytes();
  const blob = new Blob([output], { type: 'image/gif' });
  return { blob, width: outW, height: outH };
}

async function processSingleFrameResize(
  frame: DecodedFrame,
  gifWidth: number,
  gifHeight: number,
  maxDim: number,
): Promise<GifResult> {
  const compCanvas = document.createElement('canvas');
  compCanvas.width = gifWidth;
  compCanvas.height = gifHeight;
  const compCtx = compCanvas.getContext('2d')!;
  const patchCanvas = document.createElement('canvas');
  patchCanvas.width = frame.width;
  patchCanvas.height = frame.height;
  patchCanvas.getContext('2d')!.putImageData(frame.patch, 0, 0);
  compCtx.drawImage(patchCanvas, frame.left, frame.top);

  const scale = maxDim / Math.max(gifWidth, gifHeight);
  const outW = Math.round(gifWidth * scale);
  const outH = Math.round(gifHeight * scale);

  const outCanvas = document.createElement('canvas');
  outCanvas.width = outW;
  outCanvas.height = outH;
  outCanvas.getContext('2d')!.drawImage(compCanvas, 0, 0, outW, outH);

  const imageData = outCanvas.getContext('2d')!.getImageData(0, 0, outW, outH);
  const encoder = GIFEncoder();
  encodeFrame(encoder, imageData.data, outW, outH, 0, 0);
  encoder.finish();

  const blob = new Blob([encoder.bytes()], { type: 'image/gif' });
  return { blob, width: outW, height: outH };
}

async function processSingleFrameCrop(
  frame: DecodedFrame,
  gifWidth: number,
  gifHeight: number,
  cropX: number,
  cropY: number,
  cropW: number,
  cropH: number,
): Promise<GifResult> {
  const compCanvas = document.createElement('canvas');
  compCanvas.width = gifWidth;
  compCanvas.height = gifHeight;
  const compCtx = compCanvas.getContext('2d')!;
  const patchCanvas = document.createElement('canvas');
  patchCanvas.width = frame.width;
  patchCanvas.height = frame.height;
  patchCanvas.getContext('2d')!.putImageData(frame.patch, 0, 0);
  compCtx.drawImage(patchCanvas, frame.left, frame.top);

  const outW = Math.round(cropW);
  const outH = Math.round(cropH);
  const outCanvas = document.createElement('canvas');
  outCanvas.width = outW;
  outCanvas.height = outH;
  outCanvas
    .getContext('2d')!
    .drawImage(compCanvas, cropX, cropY, cropW, cropH, 0, 0, outW, outH);

  const imageData = outCanvas.getContext('2d')!.getImageData(0, 0, outW, outH);
  const encoder = GIFEncoder();
  encodeFrame(encoder, imageData.data, outW, outH, 0, 0);
  encoder.finish();

  const blob = new Blob([encoder.bytes()], { type: 'image/gif' });
  return { blob, width: outW, height: outH };
}
