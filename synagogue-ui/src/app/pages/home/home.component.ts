import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public clock:Date;
  public parasha:string = "פרשת במדבר";
  public shabatTimes:any = [
      {title: 'כניסת שבת', value: '19:10'},
      {title: 'מנחה ערב שבת', value: '19:15'},
      {title: 'שחרית שבת', value: '08:30'},
      {title: 'שיעור במסכת ברכות', value: '17:30'},
      {title: 'מנחה שבת + פרקי אבות', value: '18:45'},
      {title: 'ערבית מוצ"ש', value: '20:05'},
    ];

    public regTimes:any = [
      {title: 'תפילת שחרית', value: '07:00'},
      {title: 'מנחה', value: '19:15'},
      {title: 'ערבית', value: '19:40'},
      {title: 'שיעור ביום שלישי', value: '21:00'},
    ];

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.updateClock();
  }

  ngAfterViewInit(): void {

  }

  private updateClock(): void {
    interval(1000).subscribe(()=> this.clock = new Date());

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


