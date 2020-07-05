import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExplorePage } from './explore.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { BookService } from 'src/services/book.service';

import { BookDetailsPage } from './book-details/book-details.page';
import { SearchResultPage } from './search-result/search-result.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ExplorePageRoutingModule
  ],
  declarations: [ExplorePage, BookDetailsPage, SearchResultPage],
  providers: [ BookService ],
  entryComponents: [SearchResultPage]
})
export class ExplorePageModule {}
