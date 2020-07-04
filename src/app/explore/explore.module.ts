import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExplorePage } from './explore.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { BookService } from '../book.service';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ExplorePageRoutingModule
  ],
  declarations: [ExplorePage],
  providers: [ BookService ],
})
export class ExplorePageModule {}
