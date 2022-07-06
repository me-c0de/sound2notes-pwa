import {Inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  // https://stackoverflow.com/a/49757625

  constructor(@Inject('BASE_API_URL') private baseURL: string) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({url: `${this.baseURL}/${req.url}`});
    return next.handle(apiReq);
  }

}
