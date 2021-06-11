import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/view.interface';
import { HebrewCalendar, HDate, Location, Event, Locale } from '@hebcal/core';


@Component({
  selector: 'time-and-text-board',
  templateUrl: './time-and-text-board.component.html',
  styleUrls: ['./time-and-text-board.component.scss'],
})
export class TimeAndTextBoardComponent {
  @Input() board: Board;

  constructor() {

    // const options = {
    //   year: 2021,
    //   isHebrewYear: false,
    //   candlelighting: true,
    //   location: Location.lookup('Petach Tikvah'),
    //   sedrot: true,
    //   omer: true,
    //   locale: 'he',
    //   // candleLightingMins: 1
    // };
    // // Locale.useLocale('he');
    // const events = HebrewCalendar.calendar(options);
    // let index = 1;
    // for (const ev of events) {
    //   console.log(ev);
    //   // ev.render('he'); 
    //   const hd = ev.getDate();
    //   const date = hd.greg()
    //   console.log(date.toLocaleDateString());
    //   console.log( ev.render('he'));
    //   console.log(hd.render('he'));
    //   index++;
    //   if (index > 5)return;
    // }
  }

  ngOnInit(): void {
  }
}


