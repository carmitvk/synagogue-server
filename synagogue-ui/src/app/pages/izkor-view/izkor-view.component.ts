import { Component, Input, OnInit } from '@angular/core';
import { izkorPerson, izkorView } from 'src/app/models/view.interface-izkor';

@Component({
  selector: 'app-izkor-view',
  templateUrl: './izkor-view.component.html',
  styleUrls: ['./izkor-view.component.scss']
})
export class IzkorViewComponent implements OnInit {
  @Input() view: izkorView;
  constructor() { }

  trackByFn(idx, izkorPerson: izkorPerson) {
    return izkorPerson.name
  }

  ngOnInit(): void {
    this.view = {
      central: {
        title: 'לעילוי נשמת',
        img: 'candle-big.webp',
        footer: 'ת.נ.צ.ב.ה',
      },
      izkorPersons: [
        {
          img: 'candle-small.gif',
          name: 'sssss',
          date: 'כז חשון',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'ddd',
          date: 'ד כסלו',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'xxx',
          date: 'י"א אלול',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'xxx',
          date: 'א אלול',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'xxx',
          date: 'ב אלול',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'xxx',
          date: 'ג אלול',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'xxx',
          date: 'ד אלול',
          footer: 'ת.נ.צ.ב.ה'
        },
        {
          img: 'candle-small.gif',
          name: 'xxx',
          date: 'ה אלול',
          footer: 'ת.נ.צ.ב.ה'
        },
      ],
      durationSec: 5,
    }
  }

}
