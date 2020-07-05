import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizeBookPage } from './finalize-book.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizeBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizeBookPageRoutingModule {}
