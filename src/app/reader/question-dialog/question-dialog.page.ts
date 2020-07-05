import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.page.html',
  styleUrls: ['./question-dialog.page.scss'],
})
export class QuestionDialogPage implements OnInit {


  @Input() dialog;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  choose(answer) {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
