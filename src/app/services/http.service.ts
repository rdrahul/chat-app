import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers: Headers = new Headers();

  constructor(private _http: Http) { }

  
  post(url, body, isAuthorized = false, headers = null) {

    this.headers = new Headers();

    if (headers != null) this._createHeaders(headers);

    if (isAuthorized) this._createAuthorizationHeaders();

    let options = new RequestOptions({ headers: this.headers });

    return this._http.post(url, body, options)
      .pipe(map(res => res.json()));
  }

  get(url, isAuthorized = false, headers = null) {
    this.headers = new Headers();

    if (headers != null) this._createHeaders(headers);

    if (isAuthorized) this._createAuthorizationHeaders();

    let options = new RequestOptions({ headers: this.headers });

    return this._http.get(url, options)
      .pipe(map(res => res.json()) );
  }

  put(url, body, isAuthorized = false, headers = this.headers) {
    this.headers = new Headers();

    if (headers != null) this._createHeaders(headers);

    if (isAuthorized) this._createAuthorizationHeaders();

    let options = new RequestOptions({ headers: this.headers });

    return this._http.put(url, body, options)
      .pipe(map(res => res.json()));
  }

  delete(url, isAuthorized = false, headers = this.headers) {
    this.headers = new Headers();

    if (headers != null) this._createHeaders(headers);

    if (isAuthorized) this._createAuthorizationHeaders();

    let options = new RequestOptions({ headers: this.headers });

    return this._http.delete(url, options)
      .pipe(map( res => res.json()));
  }

  _handleObservableError(error) {
    return Observable.throw(error);
  }


  _createAuthorizationHeaders() {
    let token = JSON.parse(localStorage.getItem('token'));
    this.headers.append('x-access-token', token);
  }

  _createHeaders(headers) {
    Object.keys(headers)
      .forEach((key) => {
        this.headers.append(key, headers[key]);
      });
  }


}
