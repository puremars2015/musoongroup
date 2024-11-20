import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpInputComponent } from './wp-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WpInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WpInputComponent
  ]
})
export class WpInputModule { }
