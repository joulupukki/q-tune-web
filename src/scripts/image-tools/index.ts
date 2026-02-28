import Cropper from 'cropperjs';
import {
  type Elements,
  getElements,
  setupDropZone,
  show,
  hide,
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
    const result = await cropGif(
      buffer,
      cropData.x,
      cropData.y,
      cropData.width,
      cropData.height,
      (pct, text) => updateProgress(els, pct, text),
    );
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

  els.fileInput.value = '';
}

function generateFilename(
  original: string,
  suffix: string,
  ext: string,
): string {
  const base = original.replace(/\.[^.]+$/, '');
  return `${base}-${suffix}.${ext}`;
}
