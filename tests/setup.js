// Setup DOM APIs that might be missing in the test environment
require("jest-environment-jsdom");

// Mock DragEvent if not available
if (typeof global.DragEvent === "undefined") {
  global.DragEvent = class DragEvent extends Event {
    constructor(type, eventInitDict) {
      super(type, eventInitDict);
    }
  };
}

// Mock other missing DOM APIs
if (typeof global.ResizeObserver === "undefined") {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
}

// Mock WebGL context for VTK.js
if (typeof global.WebGLRenderingContext === "undefined") {
  global.WebGLRenderingContext = {
    VERTEX_SHADER: 0x8b31,
    FRAGMENT_SHADER: 0x8b30,
  };
}

// Mock canvas context
HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({
  fillRect: jest.fn(),
  clearRect: jest.fn(),
  getImageData: jest.fn(() => ({
    data: new Array(4),
  })),
  putImageData: jest.fn(),
  createImageData: jest.fn(),
  setTransform: jest.fn(),
  drawImage: jest.fn(),
  save: jest.fn(),
  fillText: jest.fn(),
  restore: jest.fn(),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  closePath: jest.fn(),
  stroke: jest.fn(),
  translate: jest.fn(),
  scale: jest.fn(),
  rotate: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  measureText: jest.fn(() => ({ width: 0 })),
  transform: jest.fn(),
  rect: jest.fn(),
  clip: jest.fn(),
});
