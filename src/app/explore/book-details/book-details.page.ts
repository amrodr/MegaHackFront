import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

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

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.page.html',
    styleUrls: ['./book-details.page.scss'],
})

export class BookDetailsPage implements OnInit {

    book: BookDetails;

    constructor(
        private bookService: BookService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const { bookId } = this.route.snapshot.params;

        this.bookService.getBookDetail(bookId)
            .subscribe((response: BookDetails) => {
                this.book = response;
            });
    }

    read() {
        this.router.navigate([`/reader/${this.book._id}/0`]);
    }
}
