import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ViewsDataService } from './services/data/views-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'synagogue';

  constructor(public viewsDataService: ViewsDataService){

  }
  ngOnInit(): void {
    this.viewsDataService.loadViewsData();
  }

}
