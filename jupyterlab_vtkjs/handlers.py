"""Request handlers for the jupyterlab_vtkjs server extension."""

from __future__ import annotations

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from tornado.web import Application


def setup_handlers(web_app: Application) -> None:
    """Set up the request handlers for the extension."""
