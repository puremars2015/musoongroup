import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-alert-window',
  templateUrl: './alert-window.component.html',
  styleUrls: ['./alert-window.component.css']
})
export class AlertWindowComponent {


  get confirm(): any {
    return '確認';
  }

  get modalStyle(): any {
    return {
      'z-index':'2000'
    }
  }

  get contentStyle(): any {
    return {
      'bottom': 'auto',
      'position': 'relative'
    }
  }

  constructor() {

  }

  public showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
