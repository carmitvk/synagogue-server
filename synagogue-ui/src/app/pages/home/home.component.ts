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
  // public minhaNeight:string = "19:11";
  // public shahritShabat:string = "19:11";
  // public minhaShabat:string = "19:11";
  // public sheurShabat:string = "19:11";

  // public shahritReg:string = "19:11";
  // public minhaReg:string = "19:11";
  public shabatTimes:any = [
      {title: 'כניסת שבת', value: '19:10'},
      {title: 'מנחה ערב שבת', value: '19:15'},
      {title: 'שחרית שבת', value: '08:30'},
      {title: 'שיעור במסכת ברכות', value: '17:30'},
      {title: 'מנחה שבת + פרקי אבות', value: '18:40'},
      {title: 'ערבית מוצ"ש', value: '20:10'},
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

}


