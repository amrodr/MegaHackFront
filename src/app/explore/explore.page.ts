import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.page.html',
  styleUrls: ['explore.page.scss']
})
export class ExplorePage implements OnInit{
  sections = [];

  sliderConfiguration = {
    spaceBetween: 10,
    slidesPerView: 2.6
  }

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}


  ngOnInit() {
    this.sections = this.bookService.getBooks();
  }

  bookDetail() {
    this.router.navigate['book'];
  }

  

}
