import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'confirm-dialog',
  templateUrl:'./maintain-dialog.component.html' ,
})
export class MaintainDialogComponent {
  @Input() destinationRoute: string = ''; 
  public showModal: boolean = false;

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

  constructor(private router: Router) {}

  onNoClick(): void {

  }

  onYesClick(): void {
    if (this.destinationRoute) {
      this.router.navigate([this.destinationRoute]); // 根据传入的路由路径进行导航
    }
    // this.router.navigate(['/import-export/lcdocument-maintain']);
  }

  onOpenClick():void {
    this.showModal = false;
  }
}
