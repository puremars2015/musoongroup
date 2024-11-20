import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { PersonalInfoPageComponent } from './personal-info-page/personal-info-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';

const routes: Routes = [
  { path: 'index', component: IndexPageComponent },
  { path: 'personal-info', component: PersonalInfoPageComponent},
  { path: 'faq', component: FaqPageComponent},
  { path: 'setting', component: SettingPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
