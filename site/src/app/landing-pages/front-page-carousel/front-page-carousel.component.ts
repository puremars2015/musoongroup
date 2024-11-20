import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';
import { DeepCopy } from 'src/app/sharedlibrary/deep_copy';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-front-page-carousel',
  templateUrl: './front-page-carousel.component.html',
  styleUrls: ['./front-page-carousel.component.css']
})
export class FrontPageCarouselComponent implements OnInit {

  articles: any[] = [];

  inputValue: any = {};

  get server() {
    return environment.apiURL;
  }

  data: any = {
    carousel_list:[]
  };

  constructor(private _service: CRUDService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.query();
  }

  async create() {
    let r = await firstValueFrom(this._service.Create('group','landing_page',this.data));
    console.log(r);
  }

  async query() {
    this.articles = await firstValueFrom(this._service.Read('group','landing_page'));
  }

  move(i: string) {
    // 導航到 meet-us-edit 頁面, 並同時帶上文章的 index
    // window.location.href = `/landing/frontpage-edit?id=${i}`;
    this.router.navigate(['/landing/frontpage-edit'], { queryParams: { id: i } });
  }


  async remove(i: number) {
    if (confirm('確定要刪除嗎?')) {

      // 刪除
      let r = await firstValueFrom(this._service.Remove('group','landing_page',i));
      alert(r['message']);

      if (r['message'] === 'success') {
        // 重新讀取
        this.articles = await firstValueFrom(this._service.Read('group','landing_page'));
      }
    }
  }

}
