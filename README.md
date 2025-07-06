# JupyterLab VTK.js Extension

This extension adds a custom button to the JupyterLab launcher. Clicking the button opens a new panel that renders a 3D sphere using [VTK.js](https://kitware.github.io/vtk-js/).

## Features

* Adds a **VTK.js Viewer** button to the launcher screen
* Opens a resizable, closable panel displaying a 3D-rendered sphere
* Uses WebGL through `vtk.js`

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/jupyterlab-vtkjs.git
cd jupyterlab-vtkjs
```

2. Install dependencies:

```bash
jlpm install
```

3. Build the extension:

```bash
jlpm build
```

4. Install the extension into JupyterLab:

```bash
jupyter labextension install .
```

5. Restart JupyterLab.

## How It Works

* On activation, the extension registers a command `vtkjs:open`.
* This command creates a new `Lumino` widget, adds it to the main area, and renders a VTK.js scene.
* The launcher entry is categorized under `Other` and is labeled `VTK.js Viewer`.

## Technical Stack

* **JupyterLab Extension API** (TypeScript)
* **Lumino Widgets** for UI containers
* **VTK.js** for 3D rendering

## Next Steps (Optional Enhancements)

* File loader to import `.vtp`, `.vtk` data
* React or custom widgets for camera and rendering control
* Toolbar or sidebar integration for additional controls

---

MIT License

Created by Tetsuo Koyama