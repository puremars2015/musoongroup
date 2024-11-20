import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


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

  constructor(private router: Router) {

  }

  public showModal: boolean = false;

  move() {
    this.router.navigate(['/mes/spunlace']);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
