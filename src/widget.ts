import { Widget } from "@lumino/widgets";
import { Message } from "@lumino/messaging";

import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkSphereSource from '@kitware/vtk.js/Filters/Sources/SphereSource';

export class VTKWidget extends Widget {
  constructor() {
    super();
    this.id = 'vtk-widget';
    this.title.label = 'VTK.js Viewer';
    this.title.closable = true;
    this.addClass('jp-vtkjsWidget');
  }

  protected onAfterAttach(msg: Message): void {
    super.onAfterAttach(msg);
    this.renderVTKScene();
  }

  private renderVTKScene(): void {
    const fullScreenRenderer = vtkFullScreenRenderWindow.newInstance({
      container: this.node,
      background: [0.2, 0.3, 0.4],
    });

    const renderer = fullScreenRenderer.getRenderer();
    const renderWindow = fullScreenRenderer.getRenderWindow();

    const sphereSource = vtkSphereSource.newInstance({
      center: [0, 0, 0],
      radius: 1.0,
      thetaResolution: 32,
      phiResolution: 32,
    });

    const mapper = vtkMapper.newInstance();
    mapper.setInputConnection(sphereSource.getOutputPort());

    const actor = vtkActor.newInstance();
    actor.setMapper(mapper);

    renderer.addActor(actor);
    renderer.resetCamera();
    renderWindow.render();

    const resizeObserver = new ResizeObserver(() => {
      fullScreenRenderer.resize();
    });
    resizeObserver.observe(this.node);

    this.disposed.connect(() => {
      resizeObserver.disconnect();
      fullScreenRenderer.delete();
    });
  }
}
