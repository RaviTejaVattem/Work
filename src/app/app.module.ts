import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SpaceDataService } from './service/space-data.service';
import { TableViewComponent } from './table-view/table-view.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { DetailsDialogComponent } from './shared/details-dialog/details-dialog.component';
import { CommentsDataService } from './service/comments-data.service';
import { VideoComponent } from './shared/video/video.component';

const modules = [BrowserModule, FormsModule, ReactiveFormsModule, MatInputModule, MatSidenavModule, BrowserAnimationsModule, FlexLayoutModule, MatToolbarModule, MatListModule, MatButtonModule, MatDialogModule, MatPaginatorModule, MatSortModule, HttpClientModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, AppRoutingModule];

@NgModule({
  imports: [...modules],
  declarations: [AppComponent, HelloComponent, TableViewComponent, BoardViewComponent, DetailsDialogComponent, VideoComponent],
  entryComponents: [DetailsDialogComponent],
  bootstrap: [AppComponent],
  providers: [SpaceDataService, CommentsDataService]
})
export class AppModule { }
