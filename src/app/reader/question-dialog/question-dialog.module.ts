import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionDialogPageRoutingModule } from './question-dialog-routing.module';

import { QuestionDialogPage } from './question-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionDialogPageRoutingModule
  ],
  declarations: [QuestionDialogPage]
})
export class QuestionDialogPageModule {}
