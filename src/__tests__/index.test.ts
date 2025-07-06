// Mock JupyterLab modules
jest.mock("@jupyterlab/application", () => ({}));
jest.mock("@jupyterlab/launcher", () => ({}));
// Mock the widget to avoid VTK.js import issues
jest.mock("../widget", () => ({
  VTKWidget: jest.fn().mockImplementation(() => ({})),
}));

// Simple plugin test without external dependencies
describe("JupyterLab VTKjs Plugin", () => {
  let plugin: any;

  beforeEach(() => {
    // Clear module cache and import fresh
    jest.resetModules();
    plugin = require("../index").default;
  });

  it("should have correct plugin metadata", () => {
    expect(plugin.id).toBe("jupyterlab-vtkjs:plugin");
    expect(plugin.description).toBe(
      "A JupyterLab extension that adds VTK.js viewer"
    );
    expect(plugin.autoStart).toBe(true);
    expect(plugin.optional).toBeDefined();
  });

  it("should have activate function", () => {
    expect(typeof plugin.activate).toBe("function");
  });

  it("should register command on activation", () => {
    const commands = {
      addCommand: jest.fn(),
    };
    const shell = {
      add: jest.fn(),
    };
    const app = {
      commands,
      shell,
    };
    const launcher = {
      add: jest.fn(),
    };

    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    plugin.activate(app, launcher);

    expect(consoleSpy).toHaveBeenCalledWith(
      "JupyterLab extension jupyterlab-vtkjs is activated!"
    );
    expect(commands.addCommand).toHaveBeenCalledWith("vtkjs:open", {
      label: "VTK.js Viewer",
      caption: "Open VTK.js 3D Viewer",
      execute: expect.any(Function),
    });

    consoleSpy.mockRestore();
  });

  it("should add launcher item when launcher is available", () => {
    const commands = {
      addCommand: jest.fn(),
    };
    const shell = {
      add: jest.fn(),
    };
    const app = {
      commands,
      shell,
    };
    const launcher = {
      add: jest.fn(),
    };

    plugin.activate(app, launcher);

    expect(launcher.add).toHaveBeenCalledWith({
      command: "vtkjs:open",
      category: "Other",
      rank: 0,
    });
  });

  it("should not add launcher item when launcher is null", () => {
    const commands = {
      addCommand: jest.fn(),
    };
    const shell = {
      add: jest.fn(),
    };
    const app = {
      commands,
      shell,
    };

    const launcher = {
      add: jest.fn(),
    };

    plugin.activate(app, null);

    expect(launcher.add).not.toHaveBeenCalled();
  });
});
