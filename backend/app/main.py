from fastapi import FastAPI

from app.api.router import api_router

app = FastAPI(
    title="ARIA Backend",
    description="Adaptive Reasoning Intelligence for Attack Deception",
    version="1.0.0",
)

app.include_router(api_router)