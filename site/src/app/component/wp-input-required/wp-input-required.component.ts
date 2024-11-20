import { Component, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'wp-input-required',
  templateUrl: './wp-input-required.component.html',
  styleUrls: ['./wp-input-required.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WpInputRequiredComponent),
      multi: true,
    }
  ]
})
export class WpInputRequiredComponent implements ControlValueAccessor {

  get isValid() {
    debugger;
    return this.validate(this.value);
  }

  validate(value:string): Boolean {
    return value?.length > 0;
  };

  erorrMessage: string = '此欄位必填';

  value: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // 当输入字段值变化时调用这个方法
  onInput(value: string) {
    this.value = value;
    this.onChange(value);
  }
}
