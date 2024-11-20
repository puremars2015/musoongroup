import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datatable2',
  templateUrl: './datatable2.component.html',
  styleUrls: ['../../sharedlibrary/mes_default_style.css','./datatable2.component.css']
})
export class Datatable2Component {

  @Input() body: any[][] = [
    ['A','male',10],
    ['A','male',10],
    ['A','male',10],
    ['A','male',10],
    ['A','male',10],
    ['A','male',10],
  ];

  get DisplayData(): any[] {
    if (!this.body || this.body.length === 0) {
      return [];
    }
    return this.body;
  }

  @Input() header: string[] = ['name','gender','age'];
 
  get ColumnNameList(): string[] {
    if (!this.header || this.header.length === 0) {
      return [];
    }
    return this.header;
  }

  get ColumnNameListWidth(): any {
    let p = 90 / Object.keys(this.header).length;
    return {
      'width': `${p}%`
    }
  }
}
