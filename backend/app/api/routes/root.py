from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def root():
    return {
        "project": "ARIA",
        "status": "Backend Running",
        "version": "1.0.0"
    }