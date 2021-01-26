import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {
  UserDetail: User;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
    this.route.queryParamMap.subscribe(params => {
      this.getDetail(params.get("id"));
    })
  }

  ngOnInit() {
  }

  getDetail(id: any){
    this.apiService.getUserDetail(id).subscribe((data: any) =>{
      this.UserDetail = data.data;
    });
  }

}
