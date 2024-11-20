import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerComponent } from './massenger.component';




@NgModule({
  declarations: [
    MessengerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessengerComponent
  ]
})
export class MessengerModule { }
