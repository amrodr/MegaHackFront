import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  books = [];

  sliderConfiguration = {
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
