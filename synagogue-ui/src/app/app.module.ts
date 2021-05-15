import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { DateCmpComponent } from './cmps/date-cmp/date-cmp.component';
import { CleanComponent } from './pages/clean/clean.component';
import { TalkComponent } from './pages/talk/talk.component';
import { ShavuotComponent } from './pages/shavuot/shavuot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateCmpComponent,
    CleanComponent,
    TalkComponent,
    ShavuotComponent,
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
