# app/controllers/UserController.py
from fastapi import APIRouter

router = APIRouter(
    prefix="/sample",
    tags=["sample"],
)

@router.get("/users")
def get_users():
    return [{"id": 1, "name": "John Doe"}, {"id": 2, "name": "Jane Doe"}]

@router.get("/users/{user_id}")
def get_user(user_id: int):
    return {"id": user_id, "name": "John Doe"}

@router.get("/users/{user_id}")
def get_user(user_id: int):
    return {"id": user_id, "name": "John Doe"}