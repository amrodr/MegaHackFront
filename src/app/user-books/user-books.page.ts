import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { LoadingService } from 'src/services/loading.service';

@Component({
  selector: 'app-user-books',
  templateUrl: 'user-books.page.html',
  styleUrls: ['user-books.page.scss']
})
export class UserBooksPage implements OnInit{


  user: any;

  constructor(private userService: UserService, private loadingService: LoadingService) {}

  ngOnInit() {
    this.getUser();
  }

async getUser() {
    await this.loadingService.presentLoading();
    this.userService.getUser().subscribe(res => {
      this.user = res;
      this.loadingService.dismiss();
    });
  }

}
