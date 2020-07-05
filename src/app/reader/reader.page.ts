import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { QuestionDialogPage } from './question-dialog/question-dialog.page';
@Component({
    selector: 'app-reader',
    templateUrl: 'reader.page.html',
    styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {


    pages: any = [1, 2]
    mainSliderConfiguration = {
        spaceBetween: 6,
        centeredSlides: true,
        slidesPerView: 1
    }
    constructor(
        private menu: MenuController,
        private modalController: ModalController
    ) { }

    ngOnInit() {
        this.question();
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

    // openCustom() {
    //   this.menu.enable(true, 'custom');
    //   this.menu.open('custom');
    // }

    openMenu() {
        this.menu.open();
    }
}
