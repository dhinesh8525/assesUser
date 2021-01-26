import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  //get Http Header
  getHttpHeader() {
    let headers = new HttpHeaders().set('Authorization', "");
    return headers;
  }

  get(url: string) {
    const headers = this.getHttpHeader();
    return this.http.get(this.apiUrl + url, { headers: headers });
  }
}
