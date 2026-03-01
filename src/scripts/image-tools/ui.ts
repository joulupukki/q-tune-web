export interface Elements {
  dropZone: HTMLDivElement;
  fileInput: HTMLInputElement;
  fileInfo: HTMLDivElement;
  fileName: HTMLSpanElement;
  fileType: HTMLSpanElement;
  fileDimensions: HTMLSpanElement;
  modeSelector: HTMLDivElement;
  modeResize: HTMLButtonElement;
  modeResizeSquare: HTMLButtonElement;
  modeCropPortrait: HTMLButtonElement;
  modeCropLandscape: HTMLButtonElement;
  optimizeOption: HTMLLabelElement;
  optimizeCheckbox: HTMLInputElement;
  editorArea: HTMLDivElement;
  editorImage: HTMLImageElement;
  resultArea: HTMLDivElement;
  resultPreview: HTMLImageElement;
  resultDimensions: HTMLSpanElement;
  resultSize: HTMLSpanElement;
  btnApplyCrop: HTMLButtonElement;
  btnDownload: HTMLButtonElement;
  btnStartOver: HTMLButtonElement;
  progressArea: HTMLDivElement;
  progressBar: HTMLDivElement;
  progressText: HTMLSpanElement;
  alreadySmall: HTMLDivElement;
  urlInputArea: HTMLDivElement;
  urlInput: HTMLInputElement;
  btnFetchUrl: HTMLButtonElement;
  optimizeSuggestion: HTMLDivElement;
  btnOptimizeSuggestion: HTMLButtonElement;
  btnDismissSuggestion: HTMLButtonElement;
}

export function getElements(): Elements {
  return {
    dropZone: document.getElementById('drop-zone') as HTMLDivElement,
    fileInput: document.getElementById('file-input') as HTMLInputElement,
    fileInfo: document.getElementById('file-info') as HTMLDivElement,
    fileName: document.getElementById('file-name') as HTMLSpanElement,
    fileType: document.getElementById('file-type') as HTMLSpanElement,
    fileDimensions: document.getElementById('file-dimensions') as HTMLSpanElement,
    modeSelector: document.getElementById('mode-selector') as HTMLDivElement,
    modeResize: document.getElementById('mode-resize') as HTMLButtonElement,
    modeResizeSquare: document.getElementById('mode-resize-square') as HTMLButtonElement,
    modeCropPortrait: document.getElementById('mode-crop-portrait') as HTMLButtonElement,
    modeCropLandscape: document.getElementById('mode-crop-landscape') as HTMLButtonElement,
    optimizeOption: document.getElementById('optimize-option') as HTMLLabelElement,
    optimizeCheckbox: document.getElementById('optimize-checkbox') as HTMLInputElement,
    editorArea: document.getElementById('editor-area') as HTMLDivElement,
    editorImage: document.getElementById('editor-image') as HTMLImageElement,
    resultArea: document.getElementById('result-area') as HTMLDivElement,
    resultPreview: document.getElementById('result-preview') as HTMLImageElement,
    resultDimensions: document.getElementById('result-dimensions') as HTMLSpanElement,
    resultSize: document.getElementById('result-size') as HTMLSpanElement,
    btnApplyCrop: document.getElementById('btn-apply-crop') as HTMLButtonElement,
    btnDownload: document.getElementById('btn-download') as HTMLButtonElement,
    btnStartOver: document.getElementById('btn-start-over') as HTMLButtonElement,
    progressArea: document.getElementById('progress-area') as HTMLDivElement,
    progressBar: document.getElementById('progress-bar') as HTMLDivElement,
    progressText: document.getElementById('progress-text') as HTMLSpanElement,
    alreadySmall: document.getElementById('already-small') as HTMLDivElement,
    urlInputArea: document.getElementById('url-input-area') as HTMLDivElement,
    urlInput: document.getElementById('url-input') as HTMLInputElement,
    btnFetchUrl: document.getElementById('btn-fetch-url') as HTMLButtonElement,
    optimizeSuggestion: document.getElementById('optimize-suggestion') as HTMLDivElement,
    btnOptimizeSuggestion: document.getElementById('btn-optimize-suggestion') as HTMLButtonElement,
    btnDismissSuggestion: document.getElementById('btn-dismiss-suggestion') as HTMLButtonElement,
  };
}

const VALID_TYPES = ['image/jpeg', 'image/gif'];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export function setupDropZone(
  dropZone: HTMLDivElement,
  fileInput: HTMLInputElement,
  onFile: (file: File) => void,
) {
  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer?.files[0];
    if (file) handleFileValidation(file, onFile);
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (file) handleFileValidation(file, onFile);
    fileInput.value = '';
  });
}

function handleFileValidation(file: File, onFile: (file: File) => void) {
  if (!VALID_TYPES.includes(file.type)) {
    showError('Please select a JPEG or GIF file.');
    return;
  }
  if (file.size > MAX_FILE_SIZE) {
    showError('File is too large. Maximum size is 50MB.');
    return;
  }
  onFile(file);
}

export function showError(message: string) {
  const existing = document.getElementById('error-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'error-toast';
  toast.className =
    'fixed top-4 right-4 bg-red-600 text-white px-5 py-3 rounded-lg shadow-lg z-50 font-body text-sm transition-opacity duration-300';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

export function show(el: HTMLElement) {
  el.classList.remove('hidden');
}

export function hide(el: HTMLElement) {
  el.classList.add('hidden');
}

export function updateProgress(els: Elements, percent: number, text: string) {
  show(els.progressArea);
  els.progressBar.style.width = `${Math.round(percent)}%`;
  els.progressText.textContent = text;
}

export function showResult(
  els: Elements,
  blob: Blob,
  width: number,
  height: number,
) {
  const url = URL.createObjectURL(blob);
  els.resultPreview.src = url;
  els.resultDimensions.textContent = `${width} x ${height}`;
  const sizeKb = (blob.size / 1024).toFixed(1);
  els.resultSize.textContent = `${sizeKb} KB`;
  show(els.resultArea);
  show(els.btnDownload);
  show(els.btnStartOver);
  hide(els.progressArea);
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

export function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
