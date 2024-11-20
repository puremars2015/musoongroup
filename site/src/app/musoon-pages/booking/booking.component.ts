import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-our-news',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  
  get server() {
    return environment.apiURL;
  }
  
  articles:any[]=[];

  inputValue: any = {
    title: '',
    content: ''
  };

  constructor(private service: CRUDService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.articles = await firstValueFrom(this.service.Read('musoon','booking'));
  }

  // move(i: string) {
  //   // 導航到 meet-us-edit 頁面, 並同時帶上文章的 index
  //   this.router.navigate(['/musoon/our-news-edit'], { queryParams: { id: i } });
  // }

  async search() {
    this.articles = await firstValueFrom(this.service.ReadLike('musoon','booking/search',this.inputValue));
  }

  async remove(i: number) {
    if (confirm('確定要刪除嗎?')) {

      // 刪除
      let r = await firstValueFrom(this.service.Remove('musoon','booking',i));
      alert(r['message']);

      if (r['message'] === 'success') {
        // 重新讀取
        this.articles = await firstValueFrom(this.service.Read('musoon','booking'));
      }
    }
  }
}
