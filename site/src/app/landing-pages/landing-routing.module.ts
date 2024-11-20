import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageCarouselComponent } from './front-page-carousel/front-page-carousel.component';
import { FrontPageCarouselEditComponent } from './front-page-carousel-edit/front-page-carousel-edit.component';


const routes: Routes = [
  {path:'frontpage', component:FrontPageCarouselComponent},
  {path:'frontpage-edit', component:FrontPageCarouselEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
