import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { BoardRow, MOCK_VIEWS_DATA, View1 } from 'src/app/models/view1.interface';

@Component({
  selector: 'app-views-manager',
  templateUrl: './views-manager.component.html',
  styleUrls: ['./views-manager.component.scss']
})
export class ViewsManagerComponent implements OnInit, AfterViewInit {
  public data: Array<View1>;
  public showedView: View1;
  public clock: Date;

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.data = MOCK_VIEWS_DATA;
    this.updateClock();
    this.updateView();
    // this.showedView = this.data[1];
  }

  updateView() {
//logic
// && (new Date().getDay()+1) === this.displayedBoard.showDays
    this.showedView = this.data[0];
  }
  
  ngAfterViewInit(): void {

  }

  private updateClock(): void {
    interval(1000).subscribe(() => this.clock = new Date());

  }

  public fullScreen(): void {
    console.log('inside method');
    document.documentElement.requestFullscreen();
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

}


