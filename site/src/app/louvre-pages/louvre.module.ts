import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LouvreRoutingModule } from './louvre-routing.module';
import { FrontPageCarouselComponent } from './front-page-carousel/front-page-carousel.component';
import { MeetUsComponent } from './meet-us/meet-us.component';
import { OfficeHoursComponent } from './office-hours/office-hours.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurTeamsComponent } from './our-teams/our-teams.component';
import { OurNewsComponent } from './our-news/our-news.component';
import { YourFeedbackComponent } from './your-feedback/your-feedback.component';
import { BreadcrumbModule } from '../component/breadcrumb/breadcrumb.module';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from '../component/file-upload/file-upload.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FrontPageCarouselEditComponent } from './front-page-carousel-edit/front-page-carousel-edit.component';
import { MeetUsEditComponent } from './meet-us-edit/meet-us-edit.component';
import { OurNewsEditComponent } from './our-news-edit/our-news-edit.component';
import { OurTeamsEditComponent } from './our-teams-edit/our-teams-edit.component';
import { YourFeedbackEditComponent } from './your-feedback-edit/your-feedback-edit.component';


@NgModule({
  declarations: [
    FrontPageCarouselComponent,
    FrontPageCarouselEditComponent,
    MeetUsComponent,
    OfficeHoursComponent,
    OurServiceComponent,
    OurTeamsComponent,
    OurNewsComponent,
    YourFeedbackComponent,
    ContactInfoComponent,
    MeetUsEditComponent,
    OurNewsEditComponent,
    OurTeamsEditComponent,
    YourFeedbackEditComponent
  ],
  imports: [
    CommonModule,
    LouvreRoutingModule,
    BreadcrumbModule,
    FormsModule,
    FileUploadModule
  ]
})
export class LouvreModule { }
