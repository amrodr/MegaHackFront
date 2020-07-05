import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePage } from './explore.page';
import { BookDetailsPage } from './book-details/book-details.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage,
  }, {
    path: 'book-details/:bookId',
    component: BookDetailsPage,
  }, {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorePageRoutingModule {}
