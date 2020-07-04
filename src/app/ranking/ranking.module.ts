import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RankingPage } from './ranking.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RankingPageRoutingModule } from './ranking-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: RankingPage }]),
    RankingPageRoutingModule,
  ],
  declarations: [RankingPage]
})
export class RankingPageModule {}
