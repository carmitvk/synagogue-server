import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  /////
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;
  
  // private itemContainer: any;
  private scrollContainer: any;
  private items = [];
  // private isNearBottom = true;

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
    this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());    

    // Add a new item every 2 seconds 
    setInterval(() => {
      this.items.push({});
    }, 2000);
  }
  
  private onItemElementsChanged(): void {
    // if (this.isNearBottom) {
      this.scrollToBottom();
    // }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  // private isUserNearBottom(): boolean {
  //   const threshold = 500;
  //   const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
  //   const height = this.scrollContainer.scrollHeight;
  //   return position > height - threshold;
  // }

  // scrolled(event: any): void {
  //   this.isNearBottom = this.isUserNearBottom();
  // }
  /////

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
          name: 'בן שלומית 1אברהם בוזגלו',
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
          name: '4יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '5דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },{
          img: 'candle-small.gif',
          name: '6יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '7דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '8יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '9דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '10יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '11דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '12יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '13יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '14דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '15יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '16דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '17יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '18דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '19יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '20יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '21דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '22יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '23דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '24דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '25דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '26יוחאי וענונו בן שרה',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '27דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '28דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '29דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '30דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '31דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '32דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '33דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '34דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '35דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '36דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '37דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '38דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '39דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '40דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '41דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '42דן אלפסי',
          date: 'כז חשון תשפ"א',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: '43דן אלפסי',
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
