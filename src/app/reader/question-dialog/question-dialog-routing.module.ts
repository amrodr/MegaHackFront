import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionDialogPage } from './question-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionDialogPageRoutingModule {}
