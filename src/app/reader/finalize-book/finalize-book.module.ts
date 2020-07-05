import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizeBookPageRoutingModule } from './finalize-book-routing.module';

import { FinalizeBookPage } from './finalize-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalizeBookPageRoutingModule
  ],
  declarations: [FinalizeBookPage]
})
export class FinalizeBookPageModule {}
