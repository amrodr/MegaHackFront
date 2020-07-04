import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SearchResultPage } from './search-result/search-result.page';

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
    private router: Router,
    public modalController: ModalController
  ) {}


  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(
      (res: any) => {
        this.sections = res;
      }
    )
  }

  bookDetail() {
    this.router.navigate['book'];
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchResultPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        'categories': this.sections,
      }
    });
    return await modal.present();
  }

}
