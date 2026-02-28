export function canvasToBlob(
  canvas: HTMLCanvasElement,
  type = 'image/jpeg',
  quality = 0.92,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to create blob'));
      },
      type,
      quality,
    );
  });
}

export interface ResizeResult {
  blob: Blob;
  width: number;
  height: number;
}

export async function resizeImage(
  img: HTMLImageElement,
  maxDim: number,
): Promise<ResizeResult> {
  const { naturalWidth: w, naturalHeight: h } = img;
  const scale = maxDim / Math.max(w, h);
  const newW = Math.round(w * scale);
  const newH = Math.round(h * scale);

  const canvas = document.createElement('canvas');
  canvas.width = newW;
  canvas.height = newH;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0, newW, newH);

  const blob = await canvasToBlob(canvas);
  return { blob, width: newW, height: newH };
}

export async function cropImage(
  croppedCanvas: HTMLCanvasElement,
): Promise<ResizeResult> {
  const blob = await canvasToBlob(croppedCanvas);
  return {
    blob,
    width: croppedCanvas.width,
    height: croppedCanvas.height,
  };
}
