import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { ILauncher } from '@jupyterlab/launcher';

import { VTKWidget } from './widget';

const COMMAND_ID = 'vtkjs:open';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-vtkjs:plugin',
  description: 'A JupyterLab extension that adds VTK.js viewer',
  autoStart: true,
  optional: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher | null) => {
    console.log('JupyterLab extension jupyterlab-vtkjs is activated!');

    const { commands, shell } = app;

    commands.addCommand(COMMAND_ID, {
      label: 'VTK.js Viewer',
      caption: 'Open VTK.js 3D Viewer',
      execute: () => {
        const widget = new VTKWidget();
        shell.add(widget, 'main');
      },
    });

    if (launcher) {
      launcher.add({
        command: COMMAND_ID,
        category: 'Other',
        rank: 0,
      });
    }
  },
};

export default plugin;
