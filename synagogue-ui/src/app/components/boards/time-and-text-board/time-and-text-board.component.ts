import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/view.interface';
import { HebrewCalendar, HDate, Location, Event, Locale } from '@hebcal/core';
import { TimesService } from 'src/app/services/times.service';


@Component({
  selector: 'time-and-text-board',
  templateUrl: './time-and-text-board.component.html',
  styleUrls: ['./time-and-text-board.component.scss'],
})
export class TimeAndTextBoardComponent {
  @Input() board: Board;

  constructor(public timesService: TimesService) {

  }

  ngOnInit(): void {
  }
}


