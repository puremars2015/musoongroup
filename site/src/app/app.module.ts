import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModalModule } from './component/modal/modal.module';
import { AlertWindowComponent } from './component/alert-window/alert-window.component';
import { CottonJsonUploadComponent } from './component/cotton-json-upload/cotton-json-upload.component';
import { MessengerModule } from './component/massenger/massenger.module';
import { LoadingModule } from './component/loading/loading.module';
import { LoadingInterceptor } from './http-interceptor/LoadingInterceptor';
import { DownLoadExcelComponent } from './component/down-load-excel/down-load-excel.component';
import { MusoonTempleteComponent } from './master-page/musoon-templete/musoon-templete.component';
import { SystemModule } from './system-pages/system.module';



@NgModule({
  declarations: [
    AppComponent,
    AlertWindowComponent,
    CottonJsonUploadComponent,
    DownLoadExcelComponent,
    MusoonTempleteComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ModalModule,
    MessengerModule,
    LoadingModule,
    SystemModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
