import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: 'ranking.page.html',
  styleUrls: ['ranking.page.scss']
})
export class RankingPage implements OnInit {

  rankedUsers: any;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getRank()
      .subscribe(response => {
        this.rankedUsers = response;
      });
  }
}
