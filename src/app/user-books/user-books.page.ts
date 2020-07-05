import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-books',
  templateUrl: 'user-books.page.html',
  styleUrls: ['user-books.page.scss']
})
export class UserBooksPage implements OnInit{


  user: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe(res => {
      this.user = res;
    });
  }

  navigate(book: any): void {
    this.router.navigate(['/app/explore/book-details/', book._id]);
  }
}
