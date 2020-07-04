import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: 'ranking.page.html',
  styleUrls: ['ranking.page.scss']
})
export class RankingPage {

  private users = [ 
    {id: 1, name: 'João', points: 1000, rank: 'Leader'},
    {id: 2, name: 'Maria', points: 432, rank: 'Reader'},
    {id: 3, name: 'Pâmela', points: 332, rank: 'Apprendice'},
    {id: 4, name: 'Josué', points: 223, rank: 'Apprendice'},
  ]

  constructor() {}

}
