import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MesWebV2';
  constructor() {

    if (localStorage.getItem('lang')) {
      (window as any).language = localStorage.getItem('lang');
    }
    else {
      localStorage.setItem('lang', 'TW');
      (window as any).language = 'TW';
    }
  }
}
