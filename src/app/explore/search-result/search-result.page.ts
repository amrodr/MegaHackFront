import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { ModalController } from '@ionic/angular';

interface BookDetails {
    _id?: string;
    name?: string;
    cover?: string;
    gender: string;
    description: string;
    author: string;
    publicationDate: Date;
    numberPages: number;
}

interface Category extends BookDetails {
    category: string;
}

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
        this.bookService.getFilteredBooks({})
            .subscribe((response: Category[]) => {
                this.categories = response;
                console.log(this.categories);
            });
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }

    getBooks() {

    }

}
