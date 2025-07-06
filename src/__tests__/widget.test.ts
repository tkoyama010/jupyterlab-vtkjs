// Mock VTK.js modules before importing the widget
jest.mock('@kitware/vtk.js/Rendering/Profiles/Geometry', () => ({}));
jest.mock('@kitware/vtk.js/Rendering/Core/Actor', () => ({
  default: {
    newInstance: jest.fn(() => ({
      setMapper: jest.fn(),
    })),
  },
}));
jest.mock('@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow', () => ({
  default: {
    newInstance: jest.fn(() => ({
      getRenderer: jest.fn(() => ({
        addActor: jest.fn(),
        resetCamera: jest.fn(),
      })),
      getRenderWindow: jest.fn(() => ({
        render: jest.fn(),
      })),
      resize: jest.fn(),
      delete: jest.fn(),
    })),
  },
}));
jest.mock('@kitware/vtk.js/Rendering/Core/Mapper', () => ({
  default: {
    newInstance: jest.fn(() => ({
      setInputConnection: jest.fn(),
    })),
  },
}));
jest.mock('@kitware/vtk.js/Filters/Sources/SphereSource', () => ({
  default: {
    newInstance: jest.fn(() => ({
      getOutputPort: jest.fn(),
    })),
  },
}));

describe('VTKWidget', () => {
  let VTKWidget: any;

  beforeEach(() => {
    // Import the widget after mocking
    VTKWidget = require('../widget').VTKWidget;
  });

  it('should create widget with correct properties', () => {
    const widget = new VTKWidget();
    expect(widget.id).toBe('vtk-widget');
    expect(widget.title.label).toBe('VTK.js Viewer');
    expect(widget.title.closable).toBe(true);
    expect(widget.hasClass('jp-vtkjsWidget')).toBe(true);
  });

  it('should have onAfterAttach method', () => {
    const widget = new VTKWidget();
    expect(typeof widget.onAfterAttach).toBe('function');
  });

  it('should have renderVTKScene method', () => {
    const widget = new VTKWidget();
    expect(typeof widget.renderVTKScene).toBe('function');
  });
});