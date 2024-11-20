import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';

@Component({
  selector: 'app-meet-us-edit',
  templateUrl: './meet-us-edit.component.html',
  styleUrls: ['./meet-us-edit.component.css']
})
export class MeetUsEditComponent implements OnInit {

  data: any = {
    display_order: 1
  };

  id = 'add';

  constructor(private service: CRUDService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {

    let self = this;

    let obj = await firstValueFrom(self.service.Read('musoon','meet_us'));
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
      let r = await firstValueFrom(self.service.UploadFile('musoon','meet_us/upload',self.selectedFile));
      if (r['message']!="success") {
        alert(r['message']);
        return;
      }
      self.data['content'] = r['path'];
      let r2 = await firstValueFrom(self.service.Create('musoon','meet_us',self.data));
      alert(r2['message']);
    }
    else {
      // 修改
      if (self.selectedFile) {
        let r = await firstValueFrom(self.service.UploadFile('musoon','meet_us/upload',self.selectedFile));
        if (r['message']!="success") {
          alert(r['message']);
          return;
        }
        self.data['content'] = r['path'];
      }

      let r = await firstValueFrom(self.service.Update('musoon','meet_us',self.data));
      alert(r['message']);
    }
  }

  selectedFile: any;

  loadExcelJson(event: any) {
    this.selectedFile = event;
  }
}
