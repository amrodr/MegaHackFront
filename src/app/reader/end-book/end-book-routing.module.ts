import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndBookPage } from './end-book.page';

const routes: Routes = [
  {
    path: '',
    component: EndBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndBookPageRoutingModule {}
