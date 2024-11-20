import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CRUDService } from 'src/app/service/Crud/crudservice.service';

@Component({
  selector: 'app-meet-us',
  templateUrl: './meet-us.component.html',
  styleUrls: ['./meet-us.component.css']
})
export class MeetUsComponent implements OnInit {

  articles:any[]=[];

  constructor(private service: CRUDService) { }

  async ngOnInit(): Promise<void> {
    this.articles = await firstValueFrom(this.service.Read('musoon','meet_us'));
  }

  move(i: string) {
    // 導航到 meet-us-edit 頁面, 並同時帶上文章的 index
    window.location.href = `/backstage/musoon/meet-us-edit?id=${i}`;
  }

  async remove(i: number) {
    if (confirm('確定要刪除嗎?')) {

      // 刪除
      let r = await firstValueFrom(this.service.Remove('musoon','meet_us',i));
      alert(r['message']);

      if (r['message'] === 'success') {
        // 重新讀取
        this.articles = await firstValueFrom(this.service.Read('musoon','meet_us'));
      }
    }
  }
}
