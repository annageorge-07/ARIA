from pydantic import BaseModel
from datetime import datetime


class AttackLog(BaseModel):
    ip: str
    username: str
    command: str
    timestamp: datetime