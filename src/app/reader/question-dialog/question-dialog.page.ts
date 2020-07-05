import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.page.html',
  styleUrls: ['./question-dialog.page.scss'],
})
export class QuestionDialogPage implements OnInit {


  @Input() dialog;
  @Input() user;
  @Input() bookId;
  @Input() chapterId;

  constructor(private modalCtrl: ModalController, private userService: UserService) { }

  ngOnInit() {
  }

  choose(answer) {    
    this.userService.updateUserPoints(this.bookId, this.chapterId, answer.alternative).subscribe(res => {
      this.modalCtrl.dismiss({
        dismissed: true
      });
    });
  }

}
