import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { AnoucementService } from 'src/app/service/Anouncement/anoucement.service';
import { BatchStatusService } from 'src/app/service/BatchStatus/batch-status.service';


@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit{

  announcements: any = '';
  batchList: any[] = [];

  telephoneTable: any;

  constructor(
    private service: AnoucementService,
    private bss: BatchStatusService,
    private sanitizer: DomSanitizer) { 

    }

  async ngOnInit(): Promise<void> {

  }
}

