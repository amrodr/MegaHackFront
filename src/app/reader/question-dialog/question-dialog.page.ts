import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.page.html',
  styleUrls: ['./question-dialog.page.scss'],
})
export class QuestionDialogPage implements OnInit {


  @Input() questions;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  choose(question) {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
