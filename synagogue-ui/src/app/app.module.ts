import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TalkComponent } from './pages/talk/talk.component';
import { ShavuotComponent } from './pages/shavuot/shavuot.component';
import { TimeAndTextBoardComponent } from './components/boards/time-and-text-board/time-and-text-board.component';
import { ViewsManagerComponent } from './pages/views-manager/views-manager.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { ImageBoardComponent } from './components/boards/image-board/image-board.component';
import { BoardsManagerComponent } from './components/boards/boards-manager/boards-manager.component';
import { TwoBoardsViewComponent } from './components/views/two-boards-view/two-boards-view.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { IzkorViewComponent } from './pages/izkor-view/izkor-view.component';
import { IzkorPersonComponent } from './components/izkor-person/izkor-person.component';

@NgModule({
  declarations: [
    AppComponent,
    TalkComponent,
    ShavuotComponent,
    TimeAndTextBoardComponent,
    ViewsManagerComponent,
    OpenCloseComponent,
    ImageBoardComponent,
    BoardsManagerComponent,
    TwoBoardsViewComponent,
    ImageContainerComponent,
    IzkorViewComponent,
    IzkorPersonComponent,
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
