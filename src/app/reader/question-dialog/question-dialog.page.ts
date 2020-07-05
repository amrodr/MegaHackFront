import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/services/user.service';
import { LoadingService } from 'src/services/loading.service';

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

  constructor(
    private modalCtrl: ModalController,
    private userService: UserService,
    private loadingService: LoadingService) { }

  ngOnInit() {
  }

  choose(answer) {    
    this.loadingService.presentLoading();
    this.userService.updateUserPoints(this.bookId, this.chapterId, answer.alternative).subscribe(res => {
      this.modalCtrl.dismiss({
        dismissed: true
      });
      this.loadingService.dismiss();
    });
  }

}
