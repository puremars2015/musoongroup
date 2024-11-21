from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, Response
from fastapi.staticfiles import StaticFiles
from app.controllers import GroupLandingPageController, LouvreContactController, LouvreFrontPageController, LouvreMeetUsController, LouvreOfficeHourController, LouvreOurNewsController, LouvreOurServiceController, LouvreOurTeamController, LouvreYourFeedbackController, MusoonBookingController, MusoonContactController, MusoonFrontPageController, MusoonOurNewsController, MusoonOurServiceController, MusoonOurTeamController, MusoonYourFeedbackController, PictureController, UserController
from app.controllers import MusoonMeetUsController

app = FastAPI(redirect_slashes=True)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 自定義 MIME 類型的靜態檔案伺服器
class Backstage(StaticFiles):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    # 覆寫發送檔案的方法，為 .js/.mjs 設置正確的 MIME 類型
    async def get_response(self, path, scope):
        try:
            response = await super().get_response(path, scope)
            if path.endswith(".js") or path.endswith(".mjs"):
                response.headers["Content-Type"] = "application/javascript"
            elif path.endswith(".css"):
                response.headers["Content-Type"] = "text/css"
            return response
        except:
            return FileResponse("backstage/index.html")
        
# 自定義 MIME 類型的靜態檔案伺服器
class Louvre(StaticFiles):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    # 覆寫發送檔案的方法，為 .js/.mjs 設置正確的 MIME 類型
    async def get_response(self, path, scope):
        try:
            response = await super().get_response(path, scope)
            if path.endswith(".js") or path.endswith(".mjs"):
                response.headers["Content-Type"] = "application/javascript"
            elif path.endswith(".css"):
                response.headers["Content-Type"] = "text/css"
            return response
        except:
            return FileResponse("louvre/index.html")


# 自定義 MIME 類型的靜態檔案伺服器
class Musoon(StaticFiles):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    # 覆寫發送檔案的方法，為 .js/.mjs 設置正確的 MIME 類型
    async def get_response(self, path, scope):
        try:
            response = await super().get_response(path, scope)
            if path.endswith(".js") or path.endswith(".mjs"):
                response.headers["Content-Type"] = "application/javascript"
            elif path.endswith(".css"):
                response.headers["Content-Type"] = "text/css"
            return response
        except:
            return FileResponse("musoon/index.html")

# 自定義 MIME 類型的靜態檔案伺服器
class Home(StaticFiles):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    # 覆寫發送檔案的方法，為 .js/.mjs 設置正確的 MIME 類型
    async def get_response(self, path, scope):
        try:
            response = await super().get_response(path, scope)
            if path.endswith(".js") or path.endswith(".mjs"):
                response.headers["Content-Type"] = "application/javascript"
            elif path.endswith(".css"):
                response.headers["Content-Type"] = "text/css"
            return response
        except:
            return FileResponse("home/index.html")



# Include your controllers (similar to .NET Core)
# 首頁
app.include_router(GroupLandingPageController.router, prefix="/api")

# Louvre
app.include_router(LouvreContactController.router, prefix="/api")
app.include_router(LouvreFrontPageController.router, prefix="/api")
app.include_router(LouvreMeetUsController.router, prefix="/api")
app.include_router(LouvreOurNewsController.router, prefix="/api")
app.include_router(LouvreOurServiceController.router, prefix="/api")
app.include_router(LouvreOurTeamController.router, prefix="/api")
app.include_router(LouvreYourFeedbackController.router, prefix="/api")
app.include_router(LouvreOfficeHourController.router, prefix="/api")

# Musoon
app.include_router(MusoonContactController.router, prefix="/api")
app.include_router(MusoonFrontPageController.router, prefix="/api")
app.include_router(MusoonMeetUsController.router, prefix="/api")
app.include_router(MusoonBookingController.router, prefix="/api")
app.include_router(MusoonOurNewsController.router, prefix="/api")
app.include_router(MusoonOurServiceController.router, prefix="/api")
app.include_router(MusoonOurTeamController.router, prefix="/api")
app.include_router(MusoonYourFeedbackController.router, prefix="/api")

# 圖片
app.include_router(PictureController.router, prefix="/api")

# Mount the static files directory
app.mount("/backstage", Backstage(directory="backstage"), name="backstage")

# Mount the static files directory
app.mount("/louvre", Louvre(directory="louvre"), name="louvre")

# Mount the static files directory
app.mount("/musoon", Musoon(directory="musoon"), name="musoon")

# Mount the static files directory
app.mount("/home", Home(directory="home"), name="home")


# 將 / 的資料都轉址到 /home
@app.get("/robot.txt")
async def redirect():
    return FileResponse("robot.txt")


# 將 / 的資料都轉址到 /home
@app.get("/sitemap.xml")
async def redirect():
    return FileResponse("sitemap.xml")


# 將 / 的資料都轉址到 /home
@app.get("/")
async def redirect():
    return FileResponse("home/index.html")


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app)