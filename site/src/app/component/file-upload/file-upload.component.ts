import { Component, EventEmitter, Output } from '@angular/core';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @Output() file = new EventEmitter();

  constructor(private crud: CRUDService) {

  }

  async onChange(event: any) {

    debugger
    if (event.target.files.length === 0) {
      return;
    }
    const file: File = event.target.files[0];
    this.file.emit(file);

    // debugger;
    // let content = await file?.arrayBuffer();
    // this.file.emit(content);
  }

  onUpload() {
    // we will implement this method later
  }

  uploadFile() {

  }
}

