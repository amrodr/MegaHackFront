import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReaderPage } from './reader.page';

const routes: Routes = [{
    path: ':bookId/:chapterId',
    component: ReaderPage
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReaderPageRoutingModule { }
