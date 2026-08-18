from fastapi import APIRouter
from app.schemas.log_schema import AttackLog
from app.services.log_service import save_attack_log

router = APIRouter(prefix="/logs", tags=["Logs"])


@router.post("/")
def create_log(log: AttackLog):
    inserted_id = save_attack_log(log.model_dump())
    return {
        "message": "Attack log saved successfully",
        "id": inserted_id
    }