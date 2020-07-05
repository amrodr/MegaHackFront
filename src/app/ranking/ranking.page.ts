import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LoadingService } from 'src/services/loading.service';

@Component({
  selector: 'app-ranking',
  templateUrl: 'ranking.page.html',
  styleUrls: ['ranking.page.scss']
})
export class RankingPage implements OnInit {

  // tslint:disable-next-line: ban-types
  loading: Boolean = true;
  rankedUsers: any;

  constructor(
    private userService: UserService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.getRank();
  }

  async getRank() {
    await this.loadingService.presentLoading();
    this.userService.getRank()
      .subscribe(response => {
        this.rankedUsers = response;
        this.loadingService.dismiss();
        this.loading = false;
      });
  }
}
