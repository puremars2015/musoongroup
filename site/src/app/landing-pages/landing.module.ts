import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '../component/breadcrumb/breadcrumb.module';
import { FrontPageCarouselComponent } from './front-page-carousel/front-page-carousel.component';
import { LandingRoutingModule } from './landing-routing.module';
import { FormsModule } from '@angular/forms';
import { FrontPageCarouselEditComponent } from './front-page-carousel-edit/front-page-carousel-edit.component';
import { FileUploadModule } from '../component/file-upload/file-upload.module';



@NgModule({
  declarations: [
    FrontPageCarouselComponent,
    FrontPageCarouselEditComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    BreadcrumbModule,
    FormsModule,
    FileUploadModule
  ]
})
export class LandingPagesModule { }
