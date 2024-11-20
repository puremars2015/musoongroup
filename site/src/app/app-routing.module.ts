import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenAuthHttpInterceptor } from './http-interceptor/TokenAuthHttpInterceptor';


import { MusoonTempleteComponent } from './master-page/musoon-templete/musoon-templete.component';
import { LoginPageComponent } from './system-pages/login-page/login-page.component';
import { E404Component } from './system-pages/e404/e404.component';


/**
 * 路由設定,有順序姓,如果是通配符路由,
 * 要放在最後面,否則會先被匹配到
 */

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  { 
    path: 'error/code404',
    component: E404Component
  },
  {
    path: 'system',
    component: MusoonTempleteComponent,
    children: [
      { path: '', loadChildren: () =>  import('./system-pages/system.module').then(m => m.SystemModule) },
      { path: '**', redirectTo: 'index' }
    ]
  },
  {
    path:'landing',
    component: MusoonTempleteComponent,
    children: [
      { path: '', loadChildren: () =>  import('./landing-pages/landing.module').then(m => m.LandingPagesModule) },
      { path: '**', redirectTo: 'home' }
    ]
  },
  {
    path:'louvre',
    component: MusoonTempleteComponent,
    children: [
      { path: '', loadChildren: () =>  import('./louvre-pages/louvre.module').then(m => m.LouvreModule) },
      { path: '**', redirectTo: 'home' }
    ]
  },
  {
    path:'musoon',
    component: MusoonTempleteComponent,
    children: [
      { path: '', loadChildren: () =>  import('./musoon-pages/musoon.module').then(m => m.MusoonModule) },
      { path: '**', redirectTo: 'home' }
    ]
  },
  {
    path: '**',
    redirectTo: 'system/index',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true ,  enableTracing: false })],
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

      
// @NgModule({
//   imports: [RouterModule.forRoot(routes,{ useHash: true , enableTracing: false})],
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: TokenAuthHttpInterceptor,
//       multi: true
//     }
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
