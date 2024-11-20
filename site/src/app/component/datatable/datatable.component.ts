import { Component, Input } from '@angular/core';
import { range } from 'src/app/sharedlibrary/range';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['../../sharedlibrary/mes_default_style.css','./datatable.component.css']
})
export class DatatableComponent {

  @Input() data: any[] = [
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
    {name: 'A', gender:' male' , age: 10},
  ];


  @Input() page = 1;



  set Data(value: any[]) {
    this.data = value;
  }

  get ColumnNameListWidth(): any {
    let p = 90 / Object.keys(this.data[0]).length;
    return {
      'width': `${p}%`
    }
  }
  
  get ColumnNameList(): any {
    if (!this.data || this.data.length === 0) {
      return null;
    }
    return Object.keys(this.data[0]);
  }

  
  get DisplayData(): any {
    return this.GenerateDisplayData(this.page);
  }

  
  GenerateDisplayData(page: number): any[] {
    if (!this.data || this.data.length === 0) {
      return [];
    }

    var inputArray = this.data;
    var outputArray = [];

    let pageSize = 10;
    let pageIndex = page - 1;
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



  range(arg0: number,arg1: number,step = 1): any {
    let r = range(arg0,arg1,step);
    return r;
  }

  OnClickPageButton(page: number) {
    this.page = page;
  }

  get PageCount(): number {
    let intpart = Math.floor(this.data.length / 10);
    let floatpart = this.data.length % 10;
    if (floatpart > 0) {
      return intpart + 1;
    }
    return intpart;
  }

  ChangePage(page: number) {
    let target = this.page + page;
    if (target > this.PageCount || target < 1){
      return;
    }
    this.page = target;
  }
}
