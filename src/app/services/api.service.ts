import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpService: HttpService
  ) { }

  getUserList(pageNo: any){
    return this.httpService.get('users?page='+pageNo);
  }

  getUserDetail(id: any){
    return this.httpService.get('users/'+id);
  }
}
