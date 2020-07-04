import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorePage } from './explore.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage,
  },
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorePageRoutingModule {}
