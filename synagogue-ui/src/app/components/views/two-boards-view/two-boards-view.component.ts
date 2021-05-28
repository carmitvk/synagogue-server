import {  Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { MOCK_VIEWS_DATA, TwoBoardsView, View } from 'src/app/models/view.interface';

@Component({
  selector: 'two-boards-view',
  templateUrl: './two-boards-view.component.html',
  styleUrls: ['./two-boards-view.component.scss']
})
export class TwoBoardsViewComponent implements OnInit {
  @Input() view: TwoBoardsView;
  myjson:any=JSON;
  
  public clock: Date;

  constructor() { }

  ngOnInit(): void {
    this.updateClock();
  }

  private updateClock(): void {
    interval(1000).subscribe(() => this.clock = new Date());

  }


 
}