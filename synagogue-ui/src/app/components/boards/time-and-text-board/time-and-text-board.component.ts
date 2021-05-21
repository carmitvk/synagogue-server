import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/view1.interface';


@Component({
  selector: 'time-and-text-board',
  templateUrl: './time-and-text-board.component.html',
  styleUrls: ['./time-and-text-board.component.scss'],
})
export class TimeAndTextBoardComponent {
  @Input() board: Board;

  constructor() {
  }

  ngOnInit(): void {
  }
}


