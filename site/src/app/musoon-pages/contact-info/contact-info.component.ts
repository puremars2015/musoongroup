import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  
  data: any = {
    display_order: 1
  };

  id = 'add';

  constructor(private service: CRUDService) { }

  async ngOnInit(): Promise<void> {

    let self = this;

    let obj = await firstValueFrom(self.service.Read('musoon','contact'));
    if (obj && obj.length > 0) {
      self.data = obj[0];
      self.id = '1';
    }

  }

  async save() {
    debugger;

    let self = this;

    if (self.id === 'add') {
      // 新增
      let r = await firstValueFrom(self.service.UploadFile('musoon','contact/upload',self.selectedFile));
      if (r['message']!="success") {
        alert(r['message']);
        return;
      }
      self.data['qr_code'] = r['path'];
      let r2 = await firstValueFrom(self.service.Create('musoon','contact',self.data));
      alert(r2['message']);
    }
    else {
      // 修改
      if (self.selectedFile) {
        let r = await firstValueFrom(self.service.UploadFile('musoon','contact/upload',self.selectedFile));
        if (r['message']!="success") {
          alert(r['message']);
          return;
        }
        self.data['qr_code'] = r['path'];
      }

      let r = await firstValueFrom(self.service.Update('musoon','contact',self.data));
      alert(r['message']);
    }
  }

  selectedFile: any;

  loadExcelJson(event: any) {
    this.selectedFile = event;
  }
}
