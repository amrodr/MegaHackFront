import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/services/book.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SearchResultPage } from './search-result/search-result.page';
import { LoadingService } from 'src/services/loading.service';

@Component({
    selector: 'app-explore',
    templateUrl: 'explore.page.html',
    styleUrls: ['explore.page.scss']
})
export class ExplorePage implements OnInit {
    sections = [];

    sliderConfiguration = {
        spaceBetween: 10,
        slidesPerView: 2.6
    };

    constructor(
        private bookService: BookService,
        private router: Router,
        public modalController: ModalController,
        private loadingService: LoadingService
    ) { }


    ngOnInit() {
        this.getBooks();
    }

    navigate(book: any): void {
        this.router.navigate(['/app/explore/book-details/', book._id]);
    }

    async getBooks() {
        await this.loadingService.presentLoading();
        this.bookService.getBooks().subscribe(
            (res: any) => {
                this.sections = res;
                this.loadingService.dismiss();
            }
        );
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: SearchResultPage,
            cssClass: 'my-custom-class',
            swipeToClose: true,
            componentProps: {
                categories: this.sections,
            }
        });
        return await modal.present();
    }

}
