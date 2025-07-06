try:
    from ._version import __version__
except ImportError:
    __version__ = "unknown"

from .handlers import setup_handlers


def _jupyter_labextension_paths():
    return [{
        "src": "labextension",
        "dest": "jupyterlab-vtkjs"
    }]


def _jupyter_server_extension_points():
    return [{
        "module": "jupyterlab_vtkjs"
    }]


def _load_jupyter_server_extension(server_app):
    setup_handlers(server_app.web_app)
    name = "jupyterlab_vtkjs"
    server_app.log.info(f"Registered {name} server extension")