import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-books',
  templateUrl: 'user-books.page.html',
  styleUrls: ['user-books.page.scss']
})
export class UserBooksPage implements OnInit{


  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe(res => {
      this.user = res;
    });
  }

}
