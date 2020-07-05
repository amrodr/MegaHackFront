import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

    searchSubscribeResult: Subscription;

    constructor(
        private bookService: BookService,
        public modalCtrl: ModalController,
        private router: Router
    ) { }

    ngOnInit() {
        this.searchSubscribeResult = this.bookService.getFilteredBooks('all')
            .subscribe((response: Category[]) => {
                this.categories = response;
            });
    }

    searching($event): void {
        const { value } = $event.target;

        if (this.searchSubscribeResult) {
            this.searchSubscribeResult.unsubscribe();
            delete this.searchSubscribeResult;
        }

        this.searchSubscribeResult = this.bookService.getFilteredBooks(value || 'all')
            .subscribe((response: Category[]) => {
                this.categories = response;
            });
    }

    dismiss() {
        this.modalCtrl.dismiss({
            dismissed: true
        });
    }

    getBookDetails(book: BookDetails): void {
        this.router.navigate(['/app/explore/book-details/', book._id])
            .then(response => {
                this.dismiss();
            });
    }
}
