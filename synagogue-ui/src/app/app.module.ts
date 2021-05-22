import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TalkComponent } from './pages/talk/talk.component';
import { ShavuotComponent } from './pages/shavuot/shavuot.component';
import { IzkorComponent } from './pages/izkor/izkor.component';
import { TimeAndTextBoardComponent } from './components/boards/time-and-text-board/time-and-text-board.component';
import { ViewsManagerComponent } from './pages/views-manager/views-manager.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { ImageBoardComponent } from './components/boards/image-board/image-board.component';
import { BoardsManagerComponent } from './components/boards/boards-manager/boards-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TalkComponent,
    ShavuotComponent,
    IzkorComponent,
    TimeAndTextBoardComponent,
    ViewsManagerComponent,
    OpenCloseComponent,
    ImageBoardComponent,
    BoardsManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
