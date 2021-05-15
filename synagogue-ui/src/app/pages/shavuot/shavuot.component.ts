import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-shavuot',
  templateUrl: './shavuot.component.html',
  styleUrls: ['./shavuot.component.scss']
})
export class ShavuotComponent implements OnInit {

  public clock: Date;
  public neightTimes: any = [
    { title: 'כניסת חג', value: '19:10' },
    { title: 'מנחה ערב שבועות', value: '19:15' },
    { title: 'תיקון ליל שבועות', value: '23:00' },
  ];

  public dayTimes: any = [
    { title: 'שחרית שבועות', value: '05:20' },
    { title: 'שיעור תורה ', value: '17:30' },
    { title: 'מנחה שבועות', value: '19:10' },
    { title: 'ערבית שבועות', value: '20:10' },
  ];

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.updateClock();
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
    }
  }

}
