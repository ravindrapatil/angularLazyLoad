import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class GeneralHeader implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: req.headers.set('token1', 'asd')
            // headers: req.headers.set('Authorization', 'token b4506c8390c7211c9ee8313316389613ae5906ea')
        });
        return next.handle(authReq).do((ev) => {
            if (ev instanceof HttpResponse) {
                console.log('processing response', ev);
            }
        });
    }
}
