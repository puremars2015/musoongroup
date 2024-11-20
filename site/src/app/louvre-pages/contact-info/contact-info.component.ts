import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';
import { Title } from 'src/assets/vendor/chart.js';

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

  constructor(private service: CRUDService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {

    let self = this;

    let obj = await firstValueFrom(self.service.Read('louvre','contact'));
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
      let r = await firstValueFrom(self.service.UploadFile('louvre','contact/upload',self.selectedFile));
      if (r['message']!="success") {
        alert(r['message']);
        return;
      }
      self.data['qr_code'] = r['path'];
      let r2 = await firstValueFrom(self.service.Create('louvre','contact',self.data));
      alert(r2['message']);
    }
    else {
      // 修改
      if (self.selectedFile) {
        let r = await firstValueFrom(self.service.UploadFile('louvre','contact/upload',self.selectedFile));
        if (r['message']!="success") {
          alert(r['message']);
          return;
        }
        self.data['qr_code'] = r['path'];
      }

      let r = await firstValueFrom(self.service.Update('louvre','contact',self.data));
      alert(r['message']);
    }
  }

  selectedFile: any;

  loadExcelJson(event: any) {
    this.selectedFile = event;
  }
}
