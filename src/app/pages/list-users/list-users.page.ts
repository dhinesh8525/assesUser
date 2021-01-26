import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {
  userList: User[] = [];
  page: number=1;
  constructor(
    private apiService: ApiService,
    private nav: NavController,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.apiService.getUserList(this.page).subscribe((data: any)=>{
      this.userList = data.data;
    })
  }

  userDetails(detailId: any){
    this.nav.navigateForward('detail-user',{ queryParams: {id: detailId}});
  }

  prevPageData(){
    if(this.page>=1){
      this.page = this.page-1;
      this.getUsers();
    }
  }
  nextPageData(){
    if(this.page<=1)
      this.page = 1;
    this.page = this.page+1;
    this.getUsers();
  }

}

