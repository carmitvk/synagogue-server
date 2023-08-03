import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TalkComponent } from './pages/talk/talk.component';
import { TimeAndTextBoardComponent } from './components/boards/time-and-text-board/time-and-text-board.component';
import { ViewsManagerComponent } from './pages/views-manager/views-manager.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { ImageBoardComponent } from './components/boards/image-board/image-board.component';
import { BoardsManagerComponent } from './components/boards/boards-manager/boards-manager.component';
import { TwoBoardsViewComponent } from './components/views/two-boards-view/two-boards-view.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { IzkorViewComponent } from './pages/izkor-view/izkor-view.component';
import { IzkorPersonComponent } from './components/izkor-person/izkor-person.component';
import { DatePipe } from '@angular/common';
import { JsonViewerComponent } from './components/views/json-viewer/json-viewer.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TalkComponent,
    TimeAndTextBoardComponent,
    ViewsManagerComponent,
    OpenCloseComponent,
    ImageBoardComponent,
    BoardsManagerComponent,
    TwoBoardsViewComponent,
    ImageContainerComponent,
    IzkorViewComponent,
    IzkorPersonComponent,
    JsonViewerComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AceEditorModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
