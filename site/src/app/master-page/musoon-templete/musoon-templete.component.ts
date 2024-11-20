import { AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PatchService } from 'src/app/service/Patch/patch.service';
import { TranslationService } from 'src/app/service/Translation/translation.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/service/Report/report.service';

@Component({
  selector: 'app-musoon-templete',
  templateUrl: './musoon-templete.component.html',
  styleUrls: ['../../sharedlibrary/mes_default_style.css','./musoon-templete.component.css']
})
export class MusoonTempleteComponent {

  frontend_version = "";
  backend_version = "";

  sideBarStatus = 'open';

  wet_wipes_report_list:any[] = [];

  constructor(
    private report: ReportService,
    private translation: TranslationService, 
    private patch: PatchService, 
    private router: Router) {

  }

  Translate(key: string): string {
    return this.translation.Traslation(key);
  }

  ngOnInit(): void {

    this.frontend_version = environment.mes_version;

    this.hideTopBar();

    // console.log('%cSystem design By Alan', 'color: blue; font-size: 12px; font-family: serif;');
    // console.log(`
    // ███████╗██╗   ██╗███████╗████████╗███████╗███╗    ███╗      ██████╗ ███████╗███████╗██╗███████╗███╗   ██╗      ██████╗ ██╗   ██╗
    // ██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗  ████║      ██╔══██╗██╔════╝██╔════╝██║██╔════╝████╗  ██║      ██   ██╗╚██╗ ██╔╝
    // ███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔██╗██║██║      ██║  ██║█████╗  ███████╗██║███████╗██╔██╗ ██║      ██████╔╝ ╚████╔╝ 
    // ╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚███╔╝██║      ██║  ██║██╔══╝  ╚════██║██║██   ██║██║╚██╗██║      ██   ██╗  ╚██╔╝  
    // ███████║   ██║   ███████║   ██║   ███████╗██║ ╚█╔╝ ██║      ██████╔╝███████╗███████║██║███████║██║ ╚████║      ██████╔╝   ██║   
    // ╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚╝  ╚═╝      ╚═════╝ ╚══════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝      ╚═════╝    ╚═╝   
                                                                                                                                    
    //  █████╗ ██╗      █████╗ ███╗   ██╗                                                                                              
    // ██╔══██╗██║     ██╔══██╗████╗  ██║                                                                                              
    // ███████║██║     ███████║██╔██╗ ██║                                                                                              
    // ██╔══██║██║     ██╔══██║██║╚██╗██║                                                                                              
    // ██║  ██║███████╗██║  ██║██║ ╚████║                                                                                              
    // ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝                                                                  
    // `);

    let token = localStorage.getItem('token');

    if (!token) {
      debugger;
      this.router.navigate(['/login']);
    }
  }

  Logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  toggleOnCLick(){
    document.getElementsByTagName('body')[0].classList.toggle('toggle-sidebar');
    if (this.sideBarStatus == 'open') {
      this.sideBarStatus = 'close';
    }
    else {
      this.sideBarStatus = 'open';
    }
  }

  hideTopBar() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('header');

    let self = this;

    window.addEventListener('scroll', function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > lastScrollTop && self.sideBarStatus == 'close') {
        // 向下滾動
        navbar?.classList.add('slide-up');
      } else {
        // 向上滾動
        navbar?.classList.remove('slide-up');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 避免滾動超出範圍
    }, false);
  }
  
}
