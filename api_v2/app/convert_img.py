import os
import asyncio
from PIL import Image

# 同步函式：儲存圖片為 WebP 格式
def save_image_as_webp(img_path, webp_path):
    try:
        with Image.open(img_path) as img:
            img.save(webp_path, 'webp')
            print(f"成功轉換 {img_path} 為 {webp_path}")
    except Exception as e:
        print(f"轉換 {img_path} 時發生錯誤：{e}")

# 非同步函式：負責處理資料夾中的圖片轉換
async def convert_images_to_webp(source_folder_path, dest_folder_path):
    if not os.path.exists(source_folder_path):
        print(f"來源資料夾 {source_folder_path} 不存在！")
        return

    os.makedirs(dest_folder_path, exist_ok=True)

    tasks = []  # 儲存所有非同步任務

    # 遍歷來源資料夾中的所有檔案
    for filename in os.listdir(source_folder_path):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            img_path = os.path.join(source_folder_path, filename)
            webp_filename = os.path.splitext(filename)[0] + '.webp'
            webp_path = os.path.join(dest_folder_path, webp_filename)

            if os.path.exists(webp_path):
                # print(f"{webp_filename} 已存在，跳過轉換。")
                continue

            # 使用 run_in_executor 執行同步的 I/O 密集操作
            loop = asyncio.get_event_loop()
            tasks.append(loop.run_in_executor(None, save_image_as_webp, img_path, webp_path))

    # 等待所有非同步任務完成
    await asyncio.gather(*tasks)


if __name__ == "__main__":
    # 使用 asyncio.run() 呼叫非同步函式
    asyncio.run(
        convert_images_to_webp(
            'C:\\Users\\Musoon_MA\\Documents\\GitHub\\louvre_backend_api\\api_v2\\static\\uploads',
            'C:\\Users\\Musoon_MA\\Documents\\GitHub\\louvre_backend_api\\api_v2\\static\\compression'
        )
    )

 