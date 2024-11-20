import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent {
 
  data: any = {
    display_order: 1
  };

  id = 'add';

  constructor(private service: CRUDService) { }

  async ngOnInit(): Promise<void> {

    let self = this;

    let obj = await firstValueFrom(self.service.Read('musoon','our_service'));
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
      let r = await firstValueFrom(self.service.UploadFile('musoon','our_service/upload',self.selectedFile));
      if (r['message']!="success") {
        alert(r['message']);
        return;
      }
      self.data['img_url'] = r['path'];
      let r2 = await firstValueFrom(self.service.Create('musoon','our_service',self.data));
      alert(r2['message']);
    }
    else {
      // 修改
      if (self.selectedFile) {
        let r = await firstValueFrom(self.service.UploadFile('musoon','our_service/upload',self.selectedFile));
        if (r['message']!="success") {
          alert(r['message']);
          return;
        }
        self.data['img_url'] = r['path'];
      }

      let r = await firstValueFrom(self.service.Update('musoon','our_service',self.data));
      alert(r['message']);
    }
  }

  selectedFile: any;

  loadExcelJson(event: any) {
    this.selectedFile = event;
  }
}
