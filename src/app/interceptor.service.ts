import { MessageService } from 'primeng/api';
import { mergeMap, catchError } from 'rxjs/operators';
import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpErrorResponse,
  HttpRequest,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private messageService: MessageService,
  ) {}
  intercept(
    req: HttpRequest<HttpEvent<any>>,
    next: HttpHandler
  ): Observable<any> {
    console.log('req', req);
    // if (this.auth.isActive) {
      req = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.auth?.user?.token,
        }),
      });
    // }

    const reqAfterClone = next.handle(req).pipe(
      mergeMap((value: any) => {

        if (value instanceof HttpResponse) {
          if (value!.body!.status && value!.body!.message) {
            if (value!.body!.status > 0) {
              this.messageService.add({
                severity: 'success',
                summary: ' Message',
                detail: value!.body!.message,
              });
            } else if (value!.body!.status < 1) {
              this.messageService.add({
                severity: 'error',
                summary: ' Message',
                detail: value!.body!.message,
              });
            }
          } else {
            if (value!.body!.rv > 0 && (value!.body!.Msg || value!.body!.msg)) {
              this.messageService.add({
                severity: 'success',
                summary: ' Message',
                detail: value!.body!.Msg || value!.body!.msg,
              });
            } else if (
              value!.body!.rv < 1 &&
              (value!.body!.Msg || value!.body!.msg)
            ) {
              this.messageService.add({
                severity: 'error',
                summary: ' Message',
                detail: value!.body!.Msg || value!.body!.msg,
              });
              if (value!.body!.Msg || value!.body!.msg) {
                return throwError(() => value!.body!);
              }
            }
          }
        }
        return of(value);
      }),

      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 500) {
            this.messageService.add({
              severity: 'error',
              summary: 'Server Error',
              detail: '',
            });
          } else if (err.status == 400) {
            var eror = '';
            if (err?.error?.rv <= 0 && err?.error?.msg) {
              this.messageService.add({
                severity: 'error',
                detail: err?.error?.msg,
              });
            } else {
              Object.keys(err.error.errors).forEach((key) => {
                err.error.errors[key].forEach((element: any) => {
                  eror = element;
                  if (eror) {
                    this.messageService.add({
                      severity: 'error',
                      detail: eror,
                    });
                  }
                });
              });
            }
          } else if (err.status == 401) {
            this.auth.logout();
            this.messageService.add({
              severity: 'error',
              summary: 'un Unauthorized',
              detail: '',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Server Error',
              detail: '',
            });
          }
        }
        return throwError(() => err);
      })
    );

    return reqAfterClone;
  }
}
