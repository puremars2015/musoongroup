import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectList1Component } from './select-list1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectList1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectList1Component
  ]
})
export class SelectList1Module { }
