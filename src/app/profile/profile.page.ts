import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit{

  books: any = [];
  currentUser: any;
  sliderConfiguration = {
    spaceBetween: 10,
    slidesPerView: 2.6
  };

  constructor(
    private bookService: BookService,
    private userService: UserService) {}

  ngOnInit() {
    this.getBooks();
    this.getUser();
  }

  getBooks() {
    this.books = this.bookService.getMyBooks();
  }

  getUser() {
    this.userService.getUser().subscribe(res => {
      this.currentUser = res;
      console.log(this.currentUser);
    });
  }

}
