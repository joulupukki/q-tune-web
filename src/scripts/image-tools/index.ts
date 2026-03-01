import Cropper from 'cropperjs';
import {
  type Elements,
  getElements,
  setupDropZone,
  show,
  hide,
  showError,
  updateProgress,
  showResult,
  triggerDownload,
} from './ui';
import { resizeImage, cropImage } from './jpeg-processor';
import { resizeGif, cropGif } from './gif-processor';

type Mode = 'resize' | 'resize-square' | 'crop-portrait' | 'crop-landscape';

let els: Elements;
let cropper: Cropper | null = null;
let currentFile: File | null = null;
let currentMode: Mode | null = null;
let resultBlob: Blob | null = null;
let resultFilename = '';
let originalWidth = 0;
let originalHeight = 0;

export function initImageTools() {
  els = getElements();

  setupDropZone(els.dropZone, els.fileInput, handleFile);

  els.modeResize.addEventListener('click', () => selectMode('resize'));
  els.modeResizeSquare.addEventListener('click', () =>
    selectMode('resize-square'),
  );
  els.modeCropPortrait.addEventListener('click', () =>
    selectMode('crop-portrait'),
  );
  els.modeCropLandscape.addEventListener('click', () =>
    selectMode('crop-landscape'),
  );

  els.btnApplyCrop.addEventListener('click', applyCrop);
  els.btnDownload.addEventListener('click', download);
  els.btnStartOver.addEventListener('click', startOver);

  els.btnFetchUrl.addEventListener('click', fetchFromUrl);
  els.urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') fetchFromUrl();
  });
}

async function fetchFromUrl() {
  const url = els.urlInput.value.trim();
  if (!url) return;

  try {
    new URL(url);
  } catch {
    showError('Please enter a valid URL.');
    return;
  }

  els.btnFetchUrl.disabled = true;
  els.btnFetchUrl.textContent = 'Loading...';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch (${response.status})`);
    }

    const contentType = response.headers.get('content-type') || '';
    let mimeType: string;
    if (contentType.includes('image/gif')) {
      mimeType = 'image/gif';
    } else if (
      contentType.includes('image/jpeg') ||
      contentType.includes('image/jpg')
    ) {
      mimeType = 'image/jpeg';
    } else {
      // Infer from URL extension as fallback
      const ext = url.split('?')[0].split('.').pop()?.toLowerCase();
      if (ext === 'gif') {
        mimeType = 'image/gif';
      } else if (ext === 'jpg' || ext === 'jpeg') {
        mimeType = 'image/jpeg';
      } else {
        throw new Error('URL must point to a JPEG or GIF image.');
      }
    }

    const blob = await response.blob();
    const filename =
      url.split('?')[0].split('/').pop() || `image.${mimeType === 'image/gif' ? 'gif' : 'jpg'}`;
    const file = new File([blob], filename, { type: mimeType });
    handleFile(file);
  } catch (err) {
    const message =
      err instanceof TypeError
        ? 'Could not fetch the image. The server may not allow cross-origin requests.'
        : err instanceof Error
          ? err.message
          : 'Failed to load image from URL.';
    showError(message);
  } finally {
    els.btnFetchUrl.disabled = false;
    els.btnFetchUrl.textContent = 'Load';
  }
}

function handleFile(file: File) {
  currentFile = file;
  resultBlob = null;

  // Show file info
  els.fileName.textContent = file.name;
  els.fileType.textContent = file.type === 'image/gif' ? 'GIF' : 'JPEG';

  // Load image to get dimensions
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    originalWidth = img.naturalWidth;
    originalHeight = img.naturalHeight;
    els.fileDimensions.textContent = `${originalWidth} x ${originalHeight}`;

    // Set editor image source for Cropper.js
    els.editorImage.src = url;

    // Show square resize option when image is square
    if (originalWidth === originalHeight) {
      show(els.modeResizeSquare);
    } else {
      hide(els.modeResizeSquare);
    }

    show(els.fileInfo);
    show(els.modeSelector);
    hide(els.dropZone);
    hide(els.urlInputArea);
    hide(els.resultArea);
    hide(els.btnDownload);
    hide(els.btnStartOver);
    hide(els.alreadySmall);
    hide(els.progressArea);
    hide(els.editorArea);
    hide(els.btnApplyCrop);
  };
  img.src = url;
}

function selectMode(mode: Mode) {
  currentMode = mode;
  resultBlob = null;

  // Update mode button styles
  const allModeButtons = [
    els.modeResize,
    els.modeResizeSquare,
    els.modeCropPortrait,
    els.modeCropLandscape,
  ];
  allModeButtons.forEach((btn) => {
    btn.classList.remove('bg-amber-glow', 'text-white');
    btn.classList.add('bg-cream-muted', 'text-text-body');
  });

  const modeButtonMap: Record<Mode, HTMLButtonElement> = {
    resize: els.modeResize,
    'resize-square': els.modeResizeSquare,
    'crop-portrait': els.modeCropPortrait,
    'crop-landscape': els.modeCropLandscape,
  };
  const activeBtn = modeButtonMap[mode];
  activeBtn.classList.remove('bg-cream-muted', 'text-text-body');
  activeBtn.classList.add('bg-amber-glow', 'text-white');

  // Clean up
  hide(els.resultArea);
  hide(els.btnDownload);
  hide(els.btnStartOver);
  hide(els.alreadySmall);
  hide(els.progressArea);
  destroyCropper();

  if (mode === 'resize' || mode === 'resize-square') {
    hide(els.editorArea);
    hide(els.btnApplyCrop);
    processResize(mode === 'resize-square' ? 240 : 320);
  } else {
    show(els.editorArea);
    show(els.btnApplyCrop);
    const aspect = mode === 'crop-portrait' ? 3 / 4 : 4 / 3;
    initCropper(aspect);
  }
}

function initCropper(aspectRatio: number) {
  destroyCropper();
  cropper = new Cropper(els.editorImage, {
    aspectRatio,
    viewMode: 1,
    dragMode: 'move',
    autoCropArea: 1,
    responsive: true,
    background: false,
    guides: true,
    center: true,
    highlight: false,
    cropBoxMovable: true,
    cropBoxResizable: true,
    toggleDragModeOnDblclick: false,
  });
}

function destroyCropper() {
  if (cropper) {
    cropper.destroy();
    cropper = null;
  }
}

async function processResize(maxDim = 320) {
  if (!currentFile) return;

  // Check if already small enough
  if (originalWidth <= maxDim && originalHeight <= maxDim) {
    show(els.alreadySmall);
    // Still offer download as-is
    resultBlob = currentFile;
    resultFilename = currentFile.name;
    show(els.btnDownload);
    show(els.btnStartOver);
    return;
  }

  if (currentFile.type === 'image/gif') {
    const buffer = await currentFile.arrayBuffer();
    const result = await resizeGif(buffer, maxDim, (pct, text) =>
      updateProgress(els, pct, text),
    );
    resultBlob = result.blob;
    resultFilename = generateFilename(currentFile.name, 'resized', 'gif');
    showResult(els, result.blob, result.width, result.height);
  } else {
    // JPEG
    show(els.progressArea);
    updateProgress(els, 50, 'Resizing...');
    const img = new Image();
    img.src = els.editorImage.src;
    await new Promise((resolve) => (img.onload = resolve));
    const result = await resizeImage(img, maxDim);
    resultBlob = result.blob;
    resultFilename = generateFilename(currentFile.name, 'resized', 'jpg');
    showResult(els, result.blob, result.width, result.height);
  }
}

async function applyCrop() {
  if (!currentFile || !currentMode || !cropper) return;

  const cropData = cropper.getData(true);
  const targetW = currentMode === 'crop-portrait' ? 240 : 320;
  const targetH = currentMode === 'crop-portrait' ? 320 : 240;

  if (currentFile.type === 'image/gif') {
    destroyCropper();
    hide(els.editorArea);
    hide(els.btnApplyCrop);

    const buffer = await currentFile.arrayBuffer();
    let result = await cropGif(
      buffer,
      cropData.x,
      cropData.y,
      cropData.width,
      cropData.height,
      (pct, text) => updateProgress(els, pct * 0.5, text),
    );

    // Resize cropped result so largest dimension is 320px
    if (result.width > targetW || result.height > targetH) {
      const maxDim = Math.max(targetW, targetH);
      const croppedBuffer = await result.blob.arrayBuffer();
      result = await resizeGif(croppedBuffer, maxDim, (pct, text) =>
        updateProgress(els, 50 + pct * 0.5, text),
      );
    }

    resultBlob = result.blob;
    resultFilename = generateFilename(currentFile.name, 'cropped', 'gif');
    showResult(els, result.blob, result.width, result.height);
  } else {
    // Get cropped canvas from Cropper.js before destroying it
    const croppedCanvas = cropper.getCroppedCanvas({
      width: targetW,
      height: targetH,
    });
    destroyCropper();
    hide(els.editorArea);
    hide(els.btnApplyCrop);

    show(els.progressArea);
    updateProgress(els, 50, 'Cropping...');
    const result = await cropImage(croppedCanvas);
    resultBlob = result.blob;
    resultFilename = generateFilename(currentFile.name, 'cropped', 'jpg');
    showResult(els, result.blob, result.width, result.height);
  }
}

function download() {
  if (resultBlob) {
    triggerDownload(resultBlob, resultFilename);
  }
}

function startOver() {
  destroyCropper();
  currentFile = null;
  currentMode = null;
  resultBlob = null;
  resultFilename = '';

  // Reset mode buttons
  [
    els.modeResize,
    els.modeResizeSquare,
    els.modeCropPortrait,
    els.modeCropLandscape,
  ].forEach((btn) => {
    btn.classList.remove('bg-amber-glow', 'text-white');
    btn.classList.add('bg-cream-muted', 'text-text-body');
  });
  hide(els.modeResizeSquare);

  hide(els.fileInfo);
  hide(els.modeSelector);
  hide(els.editorArea);
  hide(els.btnApplyCrop);
  hide(els.resultArea);
  hide(els.btnDownload);
  hide(els.btnStartOver);
  hide(els.progressArea);
  hide(els.alreadySmall);
  show(els.dropZone);
  show(els.urlInputArea);

  els.fileInput.value = '';
  els.urlInput.value = '';
}

function generateFilename(
  original: string,
  suffix: string,
  ext: string,
): string {
  const base = original.replace(/\.[^.]+$/, '');
  return `${base}-${suffix}.${ext}`;
}
