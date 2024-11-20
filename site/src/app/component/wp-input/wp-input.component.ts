import { Component, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'wp-input',
  templateUrl: './wp-input.component.html',
  styleUrls: ['./wp-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WpInputComponent),
      multi: true,
    }
  ]
})
export class WpInputComponent implements ControlValueAccessor  {
  

  get isValid() {
    debugger;
    return this.validate(this.value);
  }

  @Input() validate: Function = () => false;

  @Input() erorrMessage: string = '';

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
