import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, timer } from 'rxjs';
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

  // public toggleAnimation: boolean = true;

  constructor() {
    this.updateView(MOCK_VIEWS_DATA , 0);
  }

  private updateView(views: Array<View>, index: number): void {
    this.displayedView.next(views[index]);
    // this.toggleAnimation = !this.toggleAnimation;
    if(views[index].durationSec > 0 ){
      timer(views[index].durationSec * 1000).pipe(
        tap(() => {
          this.updateView(views, (index + 1) % views.length);
        }),
        take(1),
      ).subscribe();
    }
  }

  ngOnInit(): void {
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
