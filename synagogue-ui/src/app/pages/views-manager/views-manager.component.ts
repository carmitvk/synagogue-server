import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { MOCK_VIEWS_DATA, View } from 'src/app/models/view.interface';

@Component({
  selector: 'app-views-manager',
  templateUrl: './views-manager.component.html',
  styleUrls: ['./views-manager.component.scss']
})
export class ViewsManagerComponent implements OnInit {
  private readonly unsubscribe$: Subject<void> = new Subject();
  public displayedView: BehaviorSubject<View> = new BehaviorSubject<View>(undefined);
  private timer$: Subscription;
  private selectedViewIndex: number;
  public isFullScreen = false;
  // public toggleAnimation: boolean = true;

  constructor(private datePipe: DatePipe) {
    this.timer$?.unsubscribe();
    this.updateView(MOCK_VIEWS_DATA);
  }

  private updateView(views: Array<View>): void {
    let currentDate = new Date();
    let formattedDate = this.datePipe.transform(currentDate, 'ddMMyyyy');
    this.selectedViewIndex = views.findIndex(view => view.showDates.includes(formattedDate));
    if (this.selectedViewIndex < 0) {
      let currentDay = currentDate.getDay();
      this.selectedViewIndex = views.findIndex(view => view.showDays.includes(currentDay));
    }
    this.displayedView.next(views[this.selectedViewIndex]);
    // this.toggleAnimation = !this.toggleAnimation;

    this.timer$ = timer(this.getTimeTillNextDay()).pipe(
      tap(() => {
        this.updateView(views);
      }),
      take(1),
    ).subscribe();
  }
  
  public getNextView() {
    let views: Array<View> = MOCK_VIEWS_DATA;
    this.selectedViewIndex++;
    if (this.selectedViewIndex >= views.length){
      this.selectedViewIndex = 0;
    }
    this.displayedView.next(views[this.selectedViewIndex]);
  }

  ngOnInit(): void {
  }

  private getTimeTillNextDay(): number {
    const currentDate = new Date();
    // Set the target time to midnight (00:00 AM) of the next day
    const targetTime = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1, // Add 1 day to reach the next day
      0, // Hour: 0 (midnight)
      0, // Minute: 0
      0 // Second: 0
    );
    // Calculate the time difference in milliseconds + 5 min (300000)
    const timeDifference = targetTime.getTime() - currentDate.getTime() + 300000;
    return timeDifference;
  }

  public openFullscreen() {
    let elem: any = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    this.isFullScreen = true;
  }

  public closeFullscreen() {
    let elem: any = document.documentElement;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } //else if (document.webkitExitFullscreen) { /* Safari */
    //   document.webkitExitFullscreen();
    // } else if (document.msExitFullscreen) { /* IE11 */
    //   document.msExitFullscreen();
    // }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
