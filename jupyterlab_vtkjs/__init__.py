"""JupyterLab VTK.js extension."""

from __future__ import annotations

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from jupyter_server.serverapp import ServerApp

try:
    from ._version import __version__
except ImportError:
    __version__ = "unknown"

from .handlers import setup_handlers


def _jupyter_labextension_paths() -> list[dict[str, str]]:
    """Return metadata for the jupyterlab extension."""
    return [
        {
            "src": "labextension",
            "dest": "jupyterlab-vtkjs",
        }
    ]


def _jupyter_server_extension_points() -> list[dict[str, str]]:
    """Return extension points for jupyter server."""
    return [
        {
            "module": "jupyterlab_vtkjs",
        }
    ]


def _load_jupyter_server_extension(server_app: ServerApp) -> None:
    """Register the API handler to receive HTTP requests from the frontend extension."""
    setup_handlers(server_app.web_app)
    name = "jupyterlab_vtkjs"
    server_app.log.info("Registered %s server extension", name)
