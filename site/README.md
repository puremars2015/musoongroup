# 前端網站需知事項

## 參考資料
https://blog.miniasp.com/post/2017/01/17/Angular-2-deploy-on-IIS

https://blog.poychang.net/deploy-angular-to-iis-virtual-directory/

## angular 在IIS 設成應用程式
https://dotblogs.com.tw/HaoAreYou/2023/03/28/112259

## 安全性
加入IIS_IUSRS

## URL Rewrite模組安裝
https://www.iis.net/downloads/microsoft/url-rewrite

## Web.Config
```
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA" stopProcessing="true">
          <match url=".*" />
          <action type="Rewrite" url="/" />
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
          </conditions>
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## 安裝Angular在IIS說明

### 安裝在IIS大約分兩大類,一類是用啟用AppRoutingModule,另一類是用IIS的URL Rewrite功能

1. AppRoutingModule只要啟動useHash即可,不需多做更動

原先的:

```
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthHttpInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```


變更後:

```
@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true , enableTracing: true})],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthHttpInterceptor,
      multi: true
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

<label style="color:red; font-size:18px;">要注意一個重點,如果你是用"新增應用程式"的方式在IIS已經建好的網站下面新增一個程式來部屬Angular,那要注意在angular.json檔案的configuration下的編譯方式裡面要多一個參數 "baseHref": "/mes-web-v2/",mes-web-v2要跟IIS應用程式的別名相同</label>


2. 如果用IIS的URL Rewrite功能,目前主要都是直接裝在根網站,詳細如果要裝在應用程式,要再確認裝法

### 安裝步驟檢查

1. 檔案夾的安全性有沒有設定?
2. 如果使用URL Rewrite的話,該模組有沒有下載安裝?
3. base url的設定是否正確?




## 安裝.net core在IIS說明

1. 要裝.net web hosting bundle

https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-8.0.2-windows-hosting-bundle-installer




## ASCII藝術趣味字形來源
https://github.com/Kirilllive/ASCII_Art_Paint?tab=readme-ov-file


## if show the error message when execute ng xxx

ng : C:\Users\sean.ma\AppData\Roaming\npm\ng.ps1 檔案無法載入。檔案 C:\Users\sean.ma\AppData\Roaming\npm\ng.ps1 未經數位簽署。您無法在目前的系統上執行此指令碼。如需關於執行指令碼及設定執行原則的詳細資訊， 
請參閱 about_Execution_Policies (網址為 https:/go.microsoft.com/fwlink/?LinkID=135170)。
位於 線路:1 字元:1
+ ng --help
+ ~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess



執行這個,變更powershell權限管理, Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted


## Mockoon




## upload sample
https://uploadcare.com/blog/how-to-upload-files-in-angular/

## excel library
https://docs.sheetjs.com/docs/demos/frontend/angular


## Bootstrap V5特點
1. 支持 Flexbox布局
2. 支持Grid布局
3. 支持CSS自訂屬性
4. 不需要JQuery
5. 不支持IE


RWD尺寸推薦策略

想要印成固定大小的 PDF 或紙張 → 使用 mm、cm、pt，當成 Word 來用就對了
想要設 border → 使用 px
想要設字體大小、padding/margin → 使用 rem 可以讓你固定比例又保持 a11y
跟視窗大小有關的排版→ 使用vw、vh、vmin、vmax





```
.photo {
    position: relative;  
    display: inline-block; 
    margin: 0px 15px;
    width: 400px;
    background-color: #fafafa;
    /* 加上陰影與transition時間，讓hover時有浮起來的感覺 */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.5s;
  }
  
  .photo:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  
  .photo__img {
    max-width: 100%;
  }
  
  .photo__load {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    /* 
      為了讓載入圖示像是載入圖示再轉的樣子，
      把四個邊的其中一邊(這裡是bottom)設為透明，
      再透過border-radius設成圓型，
    */
    border: 5px solid #fafafa;
    border-bottom: 5px solid transparent;
    border-radius: 100%;
    background-color: transparent;
    /* 使用animation動畫，線性且無限循環 呼叫動畫rotate */
    animation: 1.5s linear infinite rotate;
  }
  
  /* 
    旋轉動畫，就是從0度轉到360無限循環
    而裡面的translate是為了讓加載圖示對齊圖片中心，
    也就是常見的left: 50% + translateX(-50%)這種做法，
    但因為有用到animation必須把translate設在keyframes裡面。
  */
  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
```





```
.loading {
        display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 84px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    text-align: center;
}
.loading span {
    display: inline-block;
    margin: 0 -0.05em;
}
.loading06 span {
    position: relative;
    color: rgba(0, 0, 0, .2);
}
.loading06 span::after {
    position: absolute;
    top: 0;
    left: 0;
    content: attr(data-text);
    color: #3fa8d8;
    opacity: 0;
    transform: rotateY(-90deg);
    animation: loading06 4s infinite;
}
.loading06 span:nth-child(2)::after {
    animation-delay: 0.2s;
}
.loading06 span:nth-child(3)::after {
    animation-delay: 0.4s;
}
.loading06 span:nth-child(4)::after {
    animation-delay: 0.6s;
}
.loading06 span:nth-child(5)::after {
    animation-delay: 0.8s;
}
.loading06 span:nth-child(6)::after {
    animation-delay: 1s;
}
.loading06 span:nth-child(7)::after {
    animation-delay: 1.2s;
}
@keyframes loading06 {
    0%, 75%, 100% {
        transform: rotateY(-90deg);
        opacity: 0;
   }
    25%, 50% {
        transform: rotateY(0);
        opacity: 1;
   }
}
```



### debug 技巧
https://fullstackladder.dev/blog/2020/02/07/angular-9-ng-object-for-debugging/




https://guahsu.io/2017/11/JavaScript30-Final-Gif-Loader/

https://medium.com/unimarket/unimarket-loading-%E6%95%88%E6%9E%9C-ae8a8227432c

https://jsonformatter.org/scss-to-css

https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask

https://medium.com/allen%E7%9A%84%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/angular-ngstyle-ngclass-2560019a2c6c