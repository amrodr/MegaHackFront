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
    };

    usersSliderConfiguration = {
        spaceBetween: 6,
        slidesPerView: 4.6
    }

    readingUsers = [
        {name: 'João', userPicture: ''},
        {name: 'Letícia', userPicture: ''},
        {name: 'Amanda', userPicture: ''},
        {name: 'Pedro', userPicture: ''},
        {name: 'Julio', userPicture: ''}
    ]

    book: any;
    chapterId: any;
    constructor(
        private menu: MenuController,
        private modalController: ModalController,
        private bookService: BookService,
        private router: Router,
        private route: ActivatedRoute
    ) { }



    ngOnInit() {
        const { bookId, chapterId } = this.route.snapshot.params;

        this.chapterId = chapterId;
        this.bookService.getChapterByBook(bookId, chapterId)
            .subscribe(response => {
                this.book = response;
                this.question();
                console.log(this.book.chapters[this.chapterId])
            });
    }

    async question() {
        if(this.book && this.chapterId > 0) {
            const modal = await this.modalController.create({
                component: QuestionDialogPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    dialog: this.book.chapters[this.chapterId].dialog
                }
            });
            return await modal.present();
        }
      
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
