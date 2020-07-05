import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/services/book.service';
import { LoadingService } from 'src/services/loading.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  books = [];

  secondarySliderConfiguration = {
    spaceBetween: 10,
    slidesPerView: 2.4
  }

  mainSliderConfiguration = {
    spaceBetween: 6,
    centeredSlides: true,
    slidesPerView: 1.4
  }

  user: any;


  constructor(
    private bookService: BookService,
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService
  ) {}


ngOnInit() {
  this.books = this.bookService.getMyBooks();
  this.getUser();
}

async getUser() {
    await this.loadingService.presentLoading();
    this.userService.getUser().subscribe(
        (res: any) => {
            this.user = res;
            this.loadingService.dismiss();
        }
    );
}
goToDetail(reading) {
  this.router.navigate(['/app/explore/book-details/', reading.book._id]);
}


}
