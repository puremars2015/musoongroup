# app/controllers/UserController.py
import os
from fastapi import APIRouter
from fastapi.responses import FileResponse
from PIL import Image


router = APIRouter(
    prefix="/static/uploads",
    tags=["system"],
)

# Create the directory if it doesn't exist
upload_folder = "static/uploads"
compression_file_folder = "static/compression"
os.makedirs(upload_folder, exist_ok=True)



@router.get("/{id}")
async def get(id):
    """回傳本地圖片檔案"""

    id = convert_to_webp_filename(id)

    # 圖片路徑（確保路徑正確）
    path = os.path.join(compression_file_folder, id)

    print(path)

    # 壓縮後圖片路徑
    # compression_path = os.path.join(compression_file_folder, id)

    # 壓縮原需求圖片,並存到新位置
    # compress_image(path, compression_path, quality=50)  # 品質設為50（0-100）

    # 設置 Cache-Control 為 5 分鐘 (300 秒)
    cache_duration = 0  # 秒數

    # headers = {"Cache-Control": "no-cache, no-store, must-revalidate"}
    headers = {"Cache-Control": f"public, max-age={cache_duration}"}
    
    return FileResponse(path, media_type="image/png", headers=headers)
    # return FileResponse(compression_path, media_type="image/png", headers=headers)

def compress_image(input_path, output_path, quality=85):
    # 打開圖片
    with Image.open(input_path) as img:
        # 壓縮圖片，保持原始格式並指定品質
        img.save(output_path, optimize=True, quality=quality)


def convert_to_webp_filename(filename:str):
    # 檢查副檔名是否為 .jpg 或 .png
    if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
        # 使用 os.path.splitext 分割檔名與副檔名，並加上 .webp
        new_filename = f"{filename.rsplit('.', 1)[0]}.webp"
        return new_filename
    else:
        raise ValueError("提供的檔案必須為 .jpg 或 .png 格式")

