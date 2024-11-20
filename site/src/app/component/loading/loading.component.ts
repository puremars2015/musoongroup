import { Component } from '@angular/core';
import { LoadingService } from 'src/app/service/Loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  editableStyle = { 'display': 'block' };

  constructor(private service: LoadingService) { 
    this.service.loading$.subscribe((value) => {
      if (value) {
        this.editableStyle = { 'display': 'block' };
      } else {
        this.editableStyle = { 'display': 'none' };
      }
    });
  }

}
