from app.models.user import User

fake_db = {}

def create_user(user: User):
    fake_db[user.id] = user
    return user

def get_user_by_id(user_id: int):
    return fake_db.get(user_id)
