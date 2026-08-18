from fastapi import FastAPI

from app.api.router import api_router
from app.core.config import settings
from app.database.mongodb import client

app = FastAPI(
    title=settings.APP_NAME,
    description="Adaptive Reasoning Intelligence for Attack Deception",
    version=settings.APP_VERSION,
)

app.include_router(api_router)
@app.on_event("startup")
async def startup_db():
    client.admin.command("ping")
    print("✅ Connected to MongoDB Atlas")