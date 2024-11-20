import { Component, EventEmitter, Output } from '@angular/core';
import { read, utils } from 'xlsx';

@Component({
  selector: 'cotton-upload',
  templateUrl: './cotton-json-upload.component.html',
  styleUrls: ['./cotton-json-upload.component.css']
})
export class CottonJsonUploadComponent {

  @Output() file = new EventEmitter(); // Flag variable

  constructor() {}

  //檢視debug用
  rows: ExcelRow[] = [ { Name: "SheetJS", Age: 0 }];

  ngOnInit(): void {}

  // On file Select
  async onChange(event: any) {

    if (event.target.files.length === 0) {
      return;
    }

    const file: File = event.target.files[0];

    try{
      debugger;
      let content = await file?.arrayBuffer();
      const wb = read(content);
      const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
      this.file.emit(ws);
      // const data = utils.sheet_to_json<ExcelRow>(ws); // generate objects
      // this.rows = data;
      // this.fileJson.emit(data);
    }
    catch{
      alert('請選擇正確的Excel檔案');
    }
  }

  onUpload() {
    // we will implement this method later
  }
}

interface ExcelRow {
  Name: string;
  Age: number;
}

