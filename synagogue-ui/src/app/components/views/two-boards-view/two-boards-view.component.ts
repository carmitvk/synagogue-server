import {  Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { MOCK_VIEWS_DATA, TwoBoardsView, View } from 'src/app/models/view.interface';
import {HebrewCalendar, HDate, Location, Event, months, Zmanim} from '@hebcal/core';
import * as moment from 'moment';
import { take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'two-boards-view',
  templateUrl: './two-boards-view.component.html',
  styleUrls: ['./two-boards-view.component.scss']
})
export class TwoBoardsViewComponent implements OnInit, OnDestroy {
  @Input() view: TwoBoardsView;
  myjson:any=JSON;
  public dimention: boolean = false;
  public dimWidth: number;
  public dimHeight: number;
  
  public clock: Date;

  public hebrewDate = require("hebrew-date");
  public currentHebrewDate: string;
  private timer$: Subscription;
  
  // public hebrewDate2 = require("hdate-he");
  // <script type="text/javascript" charset="utf-8"
  // src="https://www.hebcal.com/etc/hdate-en.js"></script>

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    this.updateClock();
    this.initCurrentHebrewDate();
    
   

  }

  ngAfterViewInit(): void {
    this.dimHeight = screen.height;
    this.dimWidth = screen.width;
  }

  private updateClock(): void {
    interval(1000).subscribe(() => this.clock = new Date());

  }

  public refresh(event) {
    event.stopPropagation();
    event.preventDefault();
    window.location.reload();
  }

  public initCurrentHebrewDate(): void {
    this.currentHebrewDate = new HDate().renderGematriya(false  );
    this.timer$ = timer(3600 * 1000).pipe(
      take(1),
      tap(() => {
        this.initCurrentHebrewDate();
      }),
    ).subscribe();




    //     var currTime = new Date();
    //     console.log('currTime=',currTime)
    //     console.log('currTime=',currTime.getUTCHours() , ':',currTime.getMinutes() )
    //     // new Sedra().get(hDate) ;
    // console.log('diff', (24-currTime.getUTCHours())-(currTime.getMinutes()/60))
    /*
      1. get the current time 10:42
      2. x = calcuate how much time to 00:01
      3. setTimer (x) run it once
      4. the function in the timer should be:
         this.currentHebrewDate = new HDate().renderGematriya(); // if this day is not friday or saterday
         else
      4. go back to 1
    */
  }

  ngOnDestroy() {
    this.timer$.unsubscribe();
  }


 
}