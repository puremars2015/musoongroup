import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';

@Component({
  selector: 'app-our-news-edit',
  templateUrl: './our-news-edit.component.html',
  styleUrls: ['./our-news-edit.component.css']
})
export class OurNewsEditComponent implements OnInit {

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
      let obj = await firstValueFrom(this.service.ReadById('musoon','our_news',params['id']));
      this.data = obj[0];
    }
  }

  async save() {
    debugger;
    let self = this;
    if (self.id === 'add') {
      // 新增
      let r = await firstValueFrom(self.service.UploadFile('musoon','our_news/upload',self.selectedFile));
      if (r['message']!="success") {
        alert(r['message']);
        return;
      }
      self.data['img_url'] = r['path'];
      let r2 = await firstValueFrom(self.service.Create('musoon','our_news',self.data));
      alert(r2['message']);
    }
    else {
      // 修改
      if (self.selectedFile) {
        let r = await firstValueFrom(self.service.UploadFile('musoon','our_news/upload',self.selectedFile));
        if (r['message']!="success") {
          alert(r['message']);
          return;
        }
        self.data['img_url'] = r['path'];
      }

      let r = await firstValueFrom(self.service.Update('musoon','our_news',self.data));
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
