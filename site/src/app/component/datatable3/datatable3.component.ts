import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datatable3',
  templateUrl: './datatable3.component.html',
  styleUrls: ['./datatable3.component.css']
})
export class Datatable3Component {

  @Input() header: string[] = ['name','gender','age'];

  @Input() body: any[] = [
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
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

  get DisplayData(): any {
    if (!this.body || this.body.length === 0) {
      return null;
    }

    var inputArray = this.body;
    var outputArray = [];

    let pageSize = 10;
    let pageIndex = 0;
    let start = 0 + (pageIndex * pageSize);
    let end = pageSize + start;//inputArray.length

    // 遍歷 inputArray 中的每個物件
    for (var i = start; i < end; i++) {
      var object = inputArray[i];
      var keyValueArray = [];

      // 遍歷物件的鍵值對，並轉換成指定格式的物件
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          var keyValueObject = {
            key: key,
            value: object[key].toString() // 將值轉換為字串
          };
          keyValueArray.push(keyValueObject);
        }
      }

      outputArray.push(keyValueArray);
    }

    return outputArray;
  }
}
