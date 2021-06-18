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
    //   console.log('date is',date.toLocaleDateString());
    //   console.log( 'ev is',ev.render('he'));
    //   console.log('hd is', hd.render('he'));
    //   console.log('day is', ev.getDate().greg().getUTCDay());
    //   index++;
    //   if (index > 0)return;
    // }
  }

  ngOnInit(): void {
  }
}


