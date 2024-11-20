import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { range } from 'src/app/sharedlibrary/range';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {


  @Input() data: any[] = [];

  @Output() selected = new EventEmitter();

  page = 1;

  get DisplayData(): any[] {
    return this.GenerateDisplayData(this.page);
  }

  get ModalStyle(): any {
    return {
      'z-index':'1100'
    }
  }

  get ContentStyle(): any {
    return {
      'bottom': 'auto',
      'position': 'relative'
    }
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

  get PageCount(): number {
    let intpart = this.data.length / 10;
    let floatpart = this.data.length % 10;
    if (floatpart > 0) {
      return intpart + 1;
    }
    return intpart;
  }

  range(arg0: number,arg1: number,step = 1): any {
    return range(arg0,arg1,step);
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

  constructor() {

  }
  
  ngOnInit(): void {

  }

  public showModal: boolean = false;

  OpenModal() {
    this.showModal = true;
  }

  CloseModal() {
    debugger;
    this.showModal = false;
  }

  SelectWorkOrder(item: any) {
    debugger;
    this.selected.emit(item);
    this.CloseModal();
  }

  OnClickPageButton(page: number) {
    this.page = page;
  }

  ChangePage(page: number) {
    let target = this.page + page;
    if (target > this.PageCount || target < 1){
      return;
    }
    this.page = target;
  }

  RowOnClick(row: any) {
    console.log(row);
  }
}
