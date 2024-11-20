import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenAuthHttpInterceptor implements HttpInterceptor {
    constructor() { }
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token')??'';
        const newRequest = req.clone({ setHeaders: { Authorization: token } });
        return next.handle(newRequest);
    }
}