from app.database.mongodb import db


def save_attack_log(log: dict):
    result = db.attack_logs.insert_one(log)
    return str(result.inserted_id)
def get_attack_logs():
    logs = []

    for log in db.attack_logs.find():
        log["_id"] = str(log["_id"])
        logs.append(log)

    return logs