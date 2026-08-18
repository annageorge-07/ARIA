from fastapi import APIRouter

from app.schemas.log_schema import AttackLog
from app.services.log_service import save_attack_log

router = APIRouter(prefix="/cowrie", tags=["Cowrie"])


@router.post("/log")
def receive_cowrie_log(log: AttackLog):
    inserted_id = save_attack_log(log.model_dump())

    return {
        "message": "Cowrie log received",
        "id": inserted_id,
    }