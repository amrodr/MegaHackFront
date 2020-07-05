import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/services/loading.service';

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
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  async ngOnInit() {
   await this.loadingService.presentLoading();
   await this.getBooks();
   await this.getUser();
  }

  getBooks() {
    this.books = this.bookService.getMyBooks();
  }

  navigate(book: any): void {
    this.router.navigate(['/app/explore/book-details/', book._id]);
  }

  getUser() {

    this.userService.getUser().subscribe(res => {
      this.currentUser = res;
      this.loadingService.dismiss();
    });
  }

}
