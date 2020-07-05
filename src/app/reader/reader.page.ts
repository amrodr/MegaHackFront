import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { QuestionDialogPage } from './question-dialog/question-dialog.page';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-reader',
    templateUrl: 'reader.page.html',
    styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {

    book: any;

    constructor(
        private menu: MenuController,
        private modalController: ModalController,
        private bookService: BookService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.question();
        const { bookId, chapterId } = this.route.snapshot.params;

        this.bookService.getChapterByBook(bookId, chapterId)
            .subscribe(response => {
                this.book = response;
            });
    }

    async question() {
        const modal = await this.modalController.create({
            component: QuestionDialogPage,
            cssClass: 'my-custom-class',
        });
        return await modal.present();
    }

    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }

    openEnd() {
        this.menu.open('end');
    }

    openMenu() {
        this.menu.open();
    }
}
