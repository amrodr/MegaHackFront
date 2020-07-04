import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/services/book.service';

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


  constructor(
    private bookService: BookService,
    private router: Router
  ) {}


  ngOnInit() {
    this.books = this.bookService.getMyBooks();
  }

}
