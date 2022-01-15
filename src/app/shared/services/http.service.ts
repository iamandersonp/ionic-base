import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, shareReplay } from 'rxjs/operators';
import { DialogsService } from './dialogs.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  urlEndpoint = environment.apiUrl;
  urlAssets = environment.assetsUrl;

  constructor(
    private http: HttpClient,
    private dialogs: DialogsService
  ) {}

  public get<T>(endpoint: string, headers?: HttpHeaders) {
    if (headers) {
      return this.http
        .get<T>(`${this.urlEndpoint}/${endpoint}`, {
          headers
        })
        .pipe(
          shareReplay(),
          catchError((e) => this.handleError(e))
        );
    }

    return this.http
      .get<T>(`${this.urlEndpoint}/${endpoint}`)
      .pipe(
        shareReplay(),
        catchError((e) => this.handleError(e))
      );
  }

  public post<T>(
    endpoint: string,
    body: any,
    reqOpts?: any
  ): Observable<any> {
    return this.http
      .post<T>(
        `${this.urlEndpoint}/${endpoint}`,
        body,
        reqOpts
      )
      .pipe(
        shareReplay(),
        catchError((e) => this.handleError(e))
      );
  }

  public put<T>(
    endpoint: string,
    body: any,
    reqOpts?: any
  ) {
    return this.http
      .put<T>(
        `${this.urlEndpoint}/${endpoint}`,
        body,
        reqOpts
      )
      .pipe(
        shareReplay(),
        catchError((e) => this.handleError(e))
      );
  }

  public delete<T>(endpoint: string, reqOpts?: any) {
    return this.http
      .delete<T>(this.urlEndpoint + endpoint, reqOpts)
      .pipe(
        shareReplay(),
        catchError((e) => this.handleError(e))
      );
  }

  getLocal<T>(endpoint: string) {
    return this.http
      .get<T>(`${this.urlAssets}/${endpoint}`)
      .pipe(
        shareReplay(),
        catchError((e) => this.handleError(e))
      );
  }

  private handleError(e) {
    if (e && e.error && e.error.error) {
      this.dialogs.presentToast(e.error.error);
    }
    if (e.status === 400) {
      return throwError(e);
    }
    if (e.error.menssage) {
    }
    return throwError(e);
  }
}
