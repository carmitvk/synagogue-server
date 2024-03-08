import {  Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { TwoBoardsView} from 'src/app/models/view.interface';
import {HDate} from '@hebcal/core';
import { take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TimesService } from 'src/app/services/times.service';


@Component({
  selector: 'two-boards-view',
  templateUrl: './two-boards-view.component.html',
  styleUrls: ['./two-boards-view.component.scss']
})
export class TwoBoardsViewComponent implements OnInit, OnDestroy {
  @Input() view: TwoBoardsView;
  public dimention: boolean = false;
  public dimWidth: number;
  public dimHeight: number;
  
  public clock: Date;

  public currentHebrewDate: string;
  private timer$: Subscription;

  constructor(private router: Router, public timesService: TimesService) { }
  
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
    this.currentHebrewDate = new HDate().renderGematriya(false);
    this.currentHebrewDate = this.currentHebrewDate.replace(/\s+\S+$/, '');//remove the year
    this.timer$ = timer(3600 * 1000).pipe(
      take(1),
      tap(() => {
        this.initCurrentHebrewDate();
      }),
    ).subscribe();
  }

  ngOnDestroy() {
    this.timer$.unsubscribe();
  }


 
}