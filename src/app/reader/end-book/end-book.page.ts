import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-end-book',
  templateUrl: './end-book.page.html',
  styleUrls: ['./end-book.page.scss'],
})
export class EndBookPage implements OnInit {

  @Input() bookId: string;

  constructor(
    private modalCtrl: ModalController,
    private bookService: BookService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  expression(feedback: string): void {
    this.bookService.getBooksFinalized(this.bookId, feedback)
      .subscribe(response => {
        this.modalCtrl.dismiss({
          dismissed: true
        });
      });
  }
}
