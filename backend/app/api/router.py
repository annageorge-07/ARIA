from fastapi import APIRouter

from app.api.routes.root import router as root_router
from app.api.routes.health import router as health_router
from app.api.routes.logs import router as logs_router

api_router = APIRouter()

api_router.include_router(root_router)
api_router.include_router(health_router)
api_router.include_router(logs_router)