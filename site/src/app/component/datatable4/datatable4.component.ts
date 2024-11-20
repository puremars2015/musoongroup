import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datatable4',
  templateUrl: './datatable4.component.html',
  styleUrls: ['./datatable4.component.css']
})
export class Datatable4Component {

  demo = "";

  @Input() header: string[] = ['name','gender','age'];

  @Input() body: any[][] = [
    ['A', ' male' ,10],
    ['A', ' male' ,10],
    ['A', ' male' ,10],
    ['A', ' male' ,10],
    ['A', ' male' ,10],
    ['A', ' male' ,10],
  ];

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

  get DisplayData(): any[][] {
    return this.body;
  }
}
