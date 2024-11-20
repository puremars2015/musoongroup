import os
from fastapi import APIRouter, UploadFile, BackgroundTasks
from typing import Dict

from app.convert_img import convert_images_to_webp
from app.helper.database_helper import DatabaseHelper


router = APIRouter(
    prefix="/louvre/our_news",
    tags=["louvre"],
)

table_name = "louvre_our_news"



# Create the directory if it doesn't exist
upload_folder = "static/uploads"
os.makedirs(upload_folder, exist_ok=True)


# create a new MusoonTeam
@router.post("/")
async def post(requestBody: Dict):
    db = DatabaseHelper('app/database/musoon.db')
    db.insert(table_name, requestBody)
    return { "message": "success" }

@router.post("/search")
async def post(requestBody: Dict):
    db = DatabaseHelper('app/database/musoon.db')
    r = db.selectLike(table_name, ["*"], requestBody)
    return r

@router.post("/upload")
async def upload_file(file: UploadFile, background_tasks: BackgroundTasks):

    file_location = os.path.join(upload_folder, file.filename)
    file_location = file_location.replace("\\", "/")
    # Save the uploaded file
    with open(file_location, "wb") as buffer:
        buffer.write(await file.read())
    
    # 將圖片轉換工作交由背景任務執行
    background_tasks.add_task(convert_images_to_webp, 'C:\\Users\\purem\\Documents\\louvre_backend_api\\api_v2\\static\\uploads', 'C:\\Users\\purem\\Documents\\louvre_backend_api\\api_v2\\static\\compression')
    return {"message": "success", "path": file_location}

# read all MusoonTeams
@router.get("/")
async def get():
    db = DatabaseHelper('app/database/musoon.db')
    r = db.select(table_name, ["*"])
    return r

# read a MusoonTeam
@router.get("/{id}")
async def get(id: int):
    db = DatabaseHelper('app/database/musoon.db')
    r = db.select(table_name, ["*"], { "id": id })
    return r

# update a MusoonTeam
@router.put("/")
async def put(requestBody: Dict):
    db = DatabaseHelper('app/database/musoon.db')
    db.update(table_name, requestBody, { "id": requestBody["id"] })
    return { "message": "success" }

# delete a MusoonTeam
@router.delete("/{id}")
async def delete(id: int):
    db = DatabaseHelper('app/database/musoon.db')
    db.delete(table_name, { "id": id })
    return { "message": "success" }





