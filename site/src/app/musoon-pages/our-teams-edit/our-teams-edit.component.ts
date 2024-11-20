import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';

@Component({
  selector: 'app-our-teams-edit',
  templateUrl: './our-teams-edit.component.html',
  styleUrls: ['./our-teams-edit.component.css']
})
export class OurTeamsEditComponent implements OnInit {

  data: any = {};

  id = '';

  constructor(private service: CRUDService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {

    let params = await firstValueFrom(this.route.queryParams);

    this.id = params['id'];

    if (this.id != 'add') {
      let obj = await firstValueFrom(this.service.ReadById('musoon','our_teams',params['id']));
      this.data = obj[0];
    }
  }

  async save() {
    debugger;
    let self = this;
    if (self.id === 'add') {
      // 新增
      let r = await firstValueFrom(self.service.UploadFile('musoon','our_teams/upload',self.selectedFile));
      if (r['message']!="success") {
        alert(r['message']);
        return;
      }
      self.data['img_url'] = r['path'];
      let r2 = await firstValueFrom(self.service.Create('musoon','our_teams',self.data));
      alert(r2['message']);
    }
    else {
      // 修改
      if (self.selectedFile) {
        let r = await firstValueFrom(self.service.UploadFile('musoon','our_teams/upload',self.selectedFile));
        if (r['message']!="success") {
          alert(r['message']);
          return;
        }
        self.data['img_url'] = r['path'];
      }

      let r = await firstValueFrom(self.service.Update('musoon','our_teams',self.data));
      alert(r['message']);
    }
  }

  async cancel() {
    // 返回上一頁
    window.history.back();
  }

  selectedFile: any;

  loadExcelJson(event: any) {
    this.selectedFile = event;
  }
}
