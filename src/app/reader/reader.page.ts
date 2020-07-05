import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { QuestionDialogPage } from './question-dialog/question-dialog.page';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-reader',
    templateUrl: 'reader.page.html',
    styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {


    mainSliderConfiguration = {
        spaceBetween: 6,
        centeredSlides: true,
        slidesPerView: 1
    }
    book: any;

    constructor(
        private menu: MenuController,
        private modalController: ModalController,
        private bookService: BookService,
        private router: Router,
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
            componentProps: {
                questions: [
                    {question: 'Jogará quadriball?', icon: 'quidditch', correct: false},
                    {question: 'Aprenderá uma nova magia?', icon: 'enhance', correct: false},
                    {question: 'Visitará o Hagrid?', icon: 'cave', correct: false},
                    {question: 'Recebera uma carta?', icon: 'owl', correct: true},
                ]
            }
        });
        return await modal.present();
    }

    goToChapter(i){
        this.router.navigate([`/reader/${this.book._id}/${i}`]);
    }

    closeBook() {
        this.router.navigate([`/app/explore`]);
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
