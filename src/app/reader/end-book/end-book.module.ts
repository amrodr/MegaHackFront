import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndBookPageRoutingModule } from './end-book-routing.module';

import { EndBookPage } from './end-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndBookPageRoutingModule
  ],
  declarations: [EndBookPage]
})
export class EndBookPageModule {}
