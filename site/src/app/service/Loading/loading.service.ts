import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingService {


  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  hide(): void {
      // throw new Error("Method not implemented.");
      this.loadingSubject.next(false);
      // console.log("hide");
  }
  show() {
      // throw new Error("Method not implemented.");
      this.loadingSubject.next(true);
      // console.log("show");
  }

  constructor() { }
}
