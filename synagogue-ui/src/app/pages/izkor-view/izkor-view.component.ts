import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { IzkorPerson, izkorView } from 'src/app/models/view.interface-izkor';

@Component({
  selector: 'app-izkor-view',
  templateUrl: './izkor-view.component.html',
  styleUrls: ['./izkor-view.component.scss']
})
export class IzkorViewComponent implements OnInit {
  public displayedView: BehaviorSubject<Array<IzkorPerson>> = new BehaviorSubject<Array<IzkorPerson>>(undefined);
  private timer$: Subscription;
  // private idx:number;
  @Input() view: izkorView;

  constructor() {
    //
    this.view = {
      central: {
        title: 'לעילוי נשמת',
        img: 'candle-big.webp',
        footer: 'להנצחת קרובים נא לפנות לועד בית הכנסת',
      },
      izkorPersons: [
        {
          img: 'candle-small.gif',
          name: '  בן שלומית 1אברהם בוזגלו',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '2יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '3דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '4דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '5דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '6דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
      ],
      durationSec: -1,
    }
    // 
  }

  private updateView(views: izkorView, index: number, moreToPresent: number): void {
    console.log('updateView1: index=', index, 'moreToPresent=', moreToPresent);

    var currPresenting = moreToPresent < 15 ? moreToPresent : 15;
    var partPersons: Array<IzkorPerson> = views.izkorPersons.slice(index, index + currPresenting);

    this.displayedView.next(partPersons);
    if (views.durationSec > 0) {
      if (moreToPresent - currPresenting <= 0) {
        console.log('updateView2-need back');

        index = 0;
        moreToPresent = this.view.izkorPersons.length;
        currPresenting = 0;
      }
      this.timer$ = timer(views.durationSec * 1000).pipe(
        tap(() => {
          this.updateView(views, index + currPresenting, moreToPresent - currPresenting);
        }),
        take(1),
      ).subscribe();
    }
  }

  trackByFn(idx, izkorPerson: IzkorPerson) {
    return izkorPerson.name
  }

  ngOnInit(): void {
    this.updateView(this.view, 0, this.view.izkorPersons.length);
  }

}
