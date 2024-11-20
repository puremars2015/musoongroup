import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meet-us-edit',
  templateUrl: './your-feedback-edit.component.html',
  styleUrls: ['./your-feedback-edit.component.css']
})
export class YourFeedbackEditComponent implements OnInit {

  data: any = {};

  id = '';

  constructor(private service: CRUDService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    // 取得當前路由的查詢參數
    // this.route.queryParams.subscribe(params => {
    //   const id = params['id'];  // 取得名為 'id' 的查詢參數
    //   console.log(id);
    //   this.id = id;
    // });

    let params = await firstValueFrom(this.route.queryParams);

    this.id = params['id'];

    if (this.id != 'add') {
      let obj = await firstValueFrom(this.service.ReadById('musoon','your_feedback',params['id']));
      this.data = obj[0];
    }
  }

  async save() {
    debugger;
    let self = this;
    if (self.id === 'add') {
      // 新增
      let r = await firstValueFrom(self.service.UploadFile('musoon','your_feedback/upload',self.selectedFile));
      if (r['message']!="success") {
        alert(r['message']);
        return;
      }
      self.data['img_url'] = r['path'];
      let r2 = await firstValueFrom(self.service.Create('musoon','your_feedback',self.data));
      alert(r2['message']);
    }
    else {
      // 修改
      if (self.selectedFile) {
        let r = await firstValueFrom(self.service.UploadFile('musoon','your_feedback/upload',self.selectedFile));
        if (r['message']!="success") {
          alert(r['message']);
          return;
        }
        self.data['img_url'] = r['path'];
      }

      let r = await firstValueFrom(self.service.Update('musoon','your_feedback',self.data));
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

  newPicture: any;

  loadNewPicture(event: any) {
    this.newPicture = event;
  }

  display_url: any;

  async UploadOnClick() {
    let self = this;
    if (self.newPicture) {
      let r = await firstValueFrom(self.service.UploadFile('musoon','your_feedback/upload',self.newPicture));
      
      if (r['message']!="success") {
        alert(r['message']);
        return;
      }

      // static/uploads/Screenshot 2024-10-28 092717.png
      // 確保沒有多餘的斜線
      const normalizePath = (base:any, sub:any) => `${base.replace(/\/+$/, '')}/${sub.replace(/^\/+/, '')}`;

      self.display_url = `<img src="${normalizePath(environment.apiURL,r['path'])}" style="width: 500px; height: 450px;">`;
    }
  }
}
