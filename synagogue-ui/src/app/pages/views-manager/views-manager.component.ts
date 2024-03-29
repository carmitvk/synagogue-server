import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject, Subscription, timer } from 'rxjs';
import { filter, take, takeUntil, tap } from 'rxjs/operators';
import { View } from 'src/app/models/view.interface';
import { ViewsDataService } from 'src/app/services/data/views-data.service';

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

  constructor(private datePipe: DatePipe, private router: Router, private activatedRoute: ActivatedRoute,
              private viewsDataService: ViewsDataService) {
    this.timer$?.unsubscribe();
    this.viewsDataService.data$.pipe(
      tap(data => console.log('before filter data:' + JSON.stringify(data))),
      filter(data => !!data),
      tap(data => console.log('after filter data:' + data)),
      tap((data: View[]) => this.updateView(data)),
      takeUntil(this.unsubscribe$),
    ).subscribe();
  }

  private updateView(views: Array<View>): void {
    // console.log('going to update the view:');
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
    this.viewsDataService.data$.pipe(
      tap((views: View[]) => {
        this.selectedViewIndex++;
        if (this.selectedViewIndex >= views.length){
          this.selectedViewIndex = 0;
        }
      }),
      tap((views: View[])=> this.displayedView.next(views[this.selectedViewIndex])),
      take(1),
    ).subscribe();
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

  public openEditViewer(): void {
    this.router.navigate(['/editor'], {relativeTo: this.activatedRoute});
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
