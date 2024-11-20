import { Component } from '@angular/core';

@Component({
  selector: 'app-meet-us',
  templateUrl: './meet-us.component.html',
  styleUrls: ['./meet-us.component.css']
})
export class MeetUsComponent {
  articles=[
    {
      title: '一站式照顧',
      content: ['產前 x 產後專業照護',
                '值班醫師24小時看診',
                '木生專科醫師巡診',
                '小兒預防針施打提醒'],
      order:1,
    },
    {
      title: '專屬個別照顧',
      content: ['個人化衛教指導',
                '營養師健康把關',
                '多樣化均衡餐點',
                '豐富產前產後教室',
                '返家前照護教學影片',],
      order:2,
    },
    {
      title: '安全環境與設施',
      content: ['親子同室感染-母嬰安全及感染管制',
                '空氣品質：優良級',
                '24HR寶寶視訊',
                '舒壓/髮療SPA室'],
      order:3,
    }
  ];
}
