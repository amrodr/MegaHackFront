import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBooksPage } from './user-books.page';

const routes: Routes = [
  {
    path: '',
    component: UserBooksPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBooksPageRoutingModule {}
