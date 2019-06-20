import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { BoardViewComponent } from './board-view/board-view.component';

export const ROUTES: Routes = [
  {
    path: 'table',
    component: TableViewComponent
  },
  {
    path: 'board',
    component: BoardViewComponent
  },
  {
    path: '**',
    component: TableViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }