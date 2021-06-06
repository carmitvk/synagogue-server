import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/view.interface';
import { HebrewCalendar, HDate, Location, Event } from '@hebcal/core';


@Component({
  selector: 'time-and-text-board',
  templateUrl: './time-and-text-board.component.html',
  styleUrls: ['./time-and-text-board.component.scss'],
})
export class TimeAndTextBoardComponent {
  @Input() board: Board;

  constructor() {

    // const options = {
    //   year: 1981,
    //   isHebrewYear: false,
    //   candlelighting: true,
    //   location: Location.lookup('San Francisco'),
    //   sedrot: true,
    //   omer: true,
    // };
    // const events = HebrewCalendar.calendar(options);

    // for (const ev of events) {
    //   const hd = ev.getDate();
    //   const date = hd.greg();
    //   console.log(date.toLocaleDateString(), ev.render(), hd.toString());
    // }
  }

  ngOnInit(): void {
  }
}


