import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/service/Schedule/schedule.service';
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';
import { DeepCopy } from 'src/app/sharedlibrary/deep_copy';

@Component({
  selector: 'app-office-hours',
  templateUrl: './office-hours.component.html',
  styleUrls: ['./office-hours.component.css']
})
export class OfficeHoursComponent implements OnInit {

  data:any[] = [];
  
  dataObj = [
    {
      date:"",
      morning_cinic_1 :"",
      morning_cinic_2 :"",
      morning_cinic_3 :"",
      afternoon_cinic_1 :"",
      afternoon_cinic_2 :"",
      night_clinic_1 :"", 
    },
    {
      date:"",
      morning_cinic_1 :"",
      morning_cinic_2 :"",
      morning_cinic_3 :"",
      afternoon_cinic_1 :"",
      afternoon_cinic_2 :"",
      night_clinic_1 :"", 
    },
    {
      date:"",
      morning_cinic_1 :"",
      morning_cinic_2 :"",
      morning_cinic_3 :"",
      afternoon_cinic_1 :"",
      afternoon_cinic_2 :"",
      night_clinic_1 :"", 
    },
    {
      date:"",
      morning_cinic_1 :"",
      morning_cinic_2 :"",
      morning_cinic_3 :"",
      afternoon_cinic_1 :"",
      afternoon_cinic_2 :"",
      night_clinic_1 :"", 
    },
    {
      date:"",
      morning_cinic_1 :"",
      morning_cinic_2 :"",
      morning_cinic_3 :"",
      afternoon_cinic_1 :"",
      afternoon_cinic_2 :"",
      night_cinic_1 :"", 
    },
    {
      date:"",
      morning_cinic_1 :"",
      morning_cinic_2 :"",
      morning_cinic_3 :"",
      afternoon_cinic_1 :"",
      afternoon_cinic_2 :"",
      night_clinic_1 :"", 
    },
    {
      date:"",
      morning_cinic_1 :"",
      morning_cinic_2 :"",
      morning_cinic_3 :"",
      afternoon_cinic_1 :"",
      afternoon_cinic_2 :"",
      night_clinic_1 :"", 
    }
  ]

  constructor(private service: ScheduleService) {

  }

  ngOnInit(): void {
    this.setWeek(new Date());
    this.fetchData();
  }

  setWeek(date: Date) {
    this.data = DeepCopy(this.dataObj);
    let days = this.getWeekDates(date);

    let index = 0;

    for(var i of this.data) {
      i.date = days[index];
      index++;
    }
  }



  nextWeek() {

    debugger;
    // 指定日期
    let date = moment(this.data[6].date);

    // 加一天
    let nextDay = date.add(1, 'days');

    console.log(nextDay.format('YYYY/MM/DD')); //Monday

    this.setWeek(new Date(nextDay.format('YYYY/MM/DD')));

    this.fetchData();
  }

  lastWeek() {
    debugger;
    
    // 指定日期
    let date = moment(this.data[0].date);

    // 加一天
    let nextDay = date.add(-1, 'days');


    if (nextDay < moment()) {
      alert("無法編輯過去時間的班表!!")
      return;
    }


    console.log(nextDay.format('YYYY/MM/DD')); //Monday

    this.setWeek(new Date(nextDay.format('YYYY/MM/DD')));

    this.fetchData();
  }

  async fetchData() {

    let self = this;

    let days = self.data.map(x=>x.date);
    if (days.length > 0) {
      let r = await firstValueFrom(self.service.ReadList('louvre','office_hour', days));
      console.log(r);
      if (r.length == 7) {
        self.data = r;
      }
    }

  }

  async saveData() {
    let self = this;
    let r = await firstValueFrom(self.service.UpdateListData('louvre','office_hour', self.data));
    alert("儲存成功");
  }


  getWeekDates(today:any) {

    debugger;

    // 取得當前日期是周幾，並將周日視為一周的最後一天
    const dayOfWeek = today.getDay(); 
    
    // 如果是周日，讓它視為第七天
    const adjustedDayOfWeek = (dayOfWeek === 0) ? 7 : dayOfWeek;
    
    // 計算周一和周六的日期
    const monday = new Date(today);
    monday.setDate(today.getDate() - (adjustedDayOfWeek - 1)); // 將日期設為周一
  
    // 創建一個數組存放從周一到周六的日期
    const weekDates = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date.toLocaleDateString()); // 將日期轉換為 YYYY-MM-DD 格式
    }
    
    return weekDates;
  }
}
