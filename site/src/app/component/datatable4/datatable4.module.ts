import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Datatable4Component } from './datatable4.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Datatable4Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Datatable4Component
  ]
})
export class Datatable4Module { }
