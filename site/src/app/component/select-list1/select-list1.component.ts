import { Component, Input } from '@angular/core';
import { IOption } from 'src/app/model/IOption';

@Component({
  selector: 'app-select-list1',
  templateUrl: './select-list1.component.html',
  styleUrls: ['./select-list1.component.css']
})
export class SelectList1Component {

  @Input() options: IOption[] = [
    { text: '2032', value: '' },
    { text: '810/811', value: '' },
    { text: '4518', value: '' },
    { text: '2607', value: '' },
    { text: '1327', value: '' },
    { text: '2042G', value: '' },
  ];

  selectedValue: any;

  constructor() { }
}
