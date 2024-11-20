import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PersonalInfoPageComponent } from './personal-info-page/personal-info-page.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'src/app/component/breadcrumb/breadcrumb.module';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { ModalModule } from 'src/app/component/modal/modal.module';
import { WpInputModule } from 'src/app/component/wp-input/wp-input.module';
import { WpInputRequiredModule } from 'src/app/component/wp-input-required/wp-input-required.module';


@NgModule({
  declarations: [
    IndexPageComponent,
    LoginPageComponent,
    PersonalInfoPageComponent,
    FaqPageComponent,
    SettingPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SystemRoutingModule,
    BreadcrumbModule,
    ModalModule,
    WpInputModule,
    WpInputRequiredModule,
    BreadcrumbModule
  ],
  exports: [
    IndexPageComponent,
    LoginPageComponent,
    PersonalInfoPageComponent,
    FaqPageComponent,
    SettingPageComponent,
  ]
})
export class SystemModule { }
