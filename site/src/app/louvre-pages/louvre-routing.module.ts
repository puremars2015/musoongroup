import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageCarouselComponent } from './front-page-carousel/front-page-carousel.component';
import { MeetUsComponent } from './meet-us/meet-us.component';
import { OfficeHoursComponent } from './office-hours/office-hours.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { OurNewsComponent } from './our-news/our-news.component';
import { OurTeamsComponent } from './our-teams/our-teams.component';
import { YourFeedbackComponent } from './your-feedback/your-feedback.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FrontPageCarouselEditComponent } from './front-page-carousel-edit/front-page-carousel-edit.component';
import { MeetUsEditComponent } from './meet-us-edit/meet-us-edit.component';
import { OurNewsEditComponent } from './our-news-edit/our-news-edit.component';
import { OurTeamsEditComponent } from './our-teams-edit/our-teams-edit.component';
import { YourFeedbackEditComponent } from './your-feedback-edit/your-feedback-edit.component';

const routes: Routes = [
  {path:'frontpage', component:FrontPageCarouselComponent},
  {path:'frontpage-edit', component:FrontPageCarouselEditComponent},
  {path:'meet-us', component:MeetUsComponent},
  {path:'meet-us-edit', component:MeetUsEditComponent},
  {path:'office-hours',component:OfficeHoursComponent},
  {path:'our-news',component:OurNewsComponent},
  {path:'our-news-edit',component:OurNewsEditComponent},
  {path:'our-service',component:OurServiceComponent},
  {path:'our-teams',component:OurTeamsComponent},
  {path:'our-teams-edit',component:OurTeamsEditComponent},
  {path:'your-feedback',component:YourFeedbackComponent},
  {path:'your-feedback-edit',component:YourFeedbackEditComponent},
  {path:'contact',component:ContactInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LouvreRoutingModule { }
