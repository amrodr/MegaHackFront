import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReaderPageRoutingModule } from './reader-routing.module';

import { ReaderPage } from './reader.page';
import { QuestionDialogPage } from './question-dialog/question-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReaderPageRoutingModule
  ],
  declarations: [ReaderPage, QuestionDialogPage],
  entryComponents: [QuestionDialogPage]
})
export class ReaderPageModule {}
