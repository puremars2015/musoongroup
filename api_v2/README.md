my_fastapi_project/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── routers/
│   │   ├── __init__.py
│   │   └── user.py
│   ├── schemas/
│   │   ├── __init__.py
│   │   └── user.py
│   └── services/
│       ├── __init__.py
│       └── user_service.py
│
├── tests/
│   └── test_user.py
│
├── .env
├── requirements.txt
└── README.md


## 測試辦法

使用
```
pytest tests/
```
執行前要在根目錄 "D:\MES\WebPro.ReportServer>" 開始執行這個命令


## 運行辦法

```
uvicorn app.main:app --reload
```


## 原始python啟動方法

因為要以模塊的方式啟動,以main來看,需要
```
python -m app.main
```

## production啟動方法

```
uvicorn app.main:app --host 0.0.0.0 --port 80 --workers 8
```

```
gunicorn -k uvicorn.workers.UvicornWorker main:app -w 4 -b 0.0.0.0:8000
```

C:\Users\Musoon_MA\Desktop\identity\73ce266784906664.pem
C:\Users\Musoon_MA\Desktop\identity\generated-private-key.pem


uvicorn app.main:app --host 0.0.0.0 --port 443 --ssl-keyfile="C:\\Users\\Musoon_MA\\Desktop\\identity\\generated-private-key.pem" --ssl-certfile="C:\\Users\\Musoon_MA\\Desktop\\identity\\73ce266784906664.pem"
uvicorn app.main:app --host 0.0.0.0 --port 443 --ssl-keyfile="C:\\Users\\Musoon_MA\\Desktop\\identity\\generated-private-key.pem" --ssl-certfile="C:\\Users\\Musoon_MA\\Desktop\\identity\\73ce266784906664.pem"