import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpInputRequiredComponent } from './wp-input-required.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WpInputRequiredComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WpInputRequiredComponent
  ]
})
export class WpInputRequiredModule { }
