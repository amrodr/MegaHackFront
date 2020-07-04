import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailsPage } from './book-details.page';

const routes: Routes = [
  {
    path: '/book-details',
    component: BookDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookDetailsPageRoutingModule {}
