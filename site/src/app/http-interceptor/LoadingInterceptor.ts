import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, finalize } from "rxjs";
import { LoadingService } from "../service/Loading/loading.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
    constructor(
        private loadingService: LoadingService
    ) { }
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();
        return next.handle(req).pipe(
          finalize(() => this.loadingService.hide())
        );
    }
}