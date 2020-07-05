import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {


  @Input() categories;

  constructor(
    private bookService: BookService,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  
  getBooks() {

  }

}
