import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info-page',
  templateUrl: './personal-info-page.component.html',
  styleUrls: ['./personal-info-page.component.css']
})
export class PersonalInfoPageComponent {
  get Lang() {
    return (window as any).language;
  }
  set Lang(value) {
    (window as any).language = value;
    localStorage.setItem('lang', value);
  }
  constructor() { 
    
  }
}
