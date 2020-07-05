import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { QuestionDialogPage } from './question-dialog/question-dialog.page';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { LoadingService } from 'src/services/loading.service';
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
    };

    user: any;

    readingUsers = [];

    book: any;
    chapterId: any;
    constructor(
        private menu: MenuController,
        private modalController: ModalController,
        private bookService: BookService,
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private loadingService: LoadingService
    ) { }

    async ngOnInit() {
        const { bookId, chapterId } = this.route.snapshot.params;
        this.getUser();
        this.chapterId = chapterId;
        await this.loadingService.presentLoading();
        this.bookService.getChapterByBook(bookId, chapterId)
            .subscribe(response => {
                this.book = response;
                this.question();
                this.readingUsers = this.book.chapters[this.chapterId].readingUsers;
            });
    }

    async question() {
        await this.loadingService.dismiss();
        if (this.book && this.chapterId > 0) {
            const modal = await this.modalController.create({
                component: QuestionDialogPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    bookId: this.book._id,
                    chapterId: this.chapterId,
                    dialog: this.book.chapters[this.chapterId].dialog,
                    user: this.user
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

    getUser() {
        this.userService.getUser().subscribe(res => {
            this.user = res;
        });
    }

    openMenu() {
        this.menu.open();
    }
}
