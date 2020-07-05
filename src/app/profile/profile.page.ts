import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit{

  books: any = [];
  sliderConfiguration = {
    spaceBetween: 10,
    slidesPerView: 2.6
  };

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.books = this.bookService.getMyBooks();
  }

}
