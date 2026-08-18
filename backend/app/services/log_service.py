from app.database.mongodb import db


def save_attack_log(log: dict):
    result = db.attack_logs.insert_one(log)
    return str(result.inserted_id)