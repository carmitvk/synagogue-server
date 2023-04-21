import {HebrewCalendar, HDate, Location, Event, months, Zmanim} from '@hebcal/core';

import { Injectable } from '@angular/core';


const SUNRISE = "zmanim.sunrise";
const SUNSET = "zmanim.sunset";
const SOF_ZMAN_SHMA_GRA = "zmanim.sofZmanShma";
const MINCHA_GEDOLA = "zmanim.minchaGedola";
const TZEIT_HAKOCHAVIM = "zmanim.tzeitHakochavim";
const SOF_ZMAN_SHMA_MGA = "zmanim.sofZmanShmaMGA";
const MINCHA_CHOL = "zmanim.minchaChol";

@Injectable({
  providedIn: 'root',
})
export class TimesService {


  constructor(){}



    // const options = {
    //   year: 2023,
    //   isHebrewYear: false,
    //   il:true,
    //   sedrot: true,
    //   omer: true,
    //   candlelighting: true,
    //   location: Location.lookup('Petach Tikvah'),
    //   locale: 'he',
    //   start:new HDate(),
    //   end: new HDate().next()
    // }
    // var events = HebrewCalendar.calendar(options);

    // for (const ev of events) {
    //   const hd = ev.getDate();
    //   const date = hd.greg();
    //   console.log(ev.render('he'));
    //   console.log(ev); 
    // }
    // var location = Location.lookup('Petach Tikvah');
    // var zmanim = new Zmanim(new HDate(), location.getLatitude(), location.getLongitude());
    // zmanim.sunrise();
    // console.log('zmanim =', zmanim);
 



  public getTimes(time: string): string {
    let location = Location.lookup('Petach Tikvah');
    let zmanim = new Zmanim(new HDate(), location.getLatitude(), location.getLongitude());
    let result = time;
    let hebrewDate;

    switch (time) {
      case SUNRISE:
        hebrewDate = zmanim.sunrise();
        break;
      case SUNSET:
        hebrewDate = zmanim.sunset();
        break;
      case SOF_ZMAN_SHMA_GRA:
        hebrewDate = zmanim.sofZmanShma();
        break;
      case SOF_ZMAN_SHMA_MGA:
        hebrewDate = zmanim.sofZmanShmaMGA();
        break;
      case MINCHA_GEDOLA:
        hebrewDate = zmanim.minchaGedola();
        break;
      case TZEIT_HAKOCHAVIM:
        hebrewDate = new Date(zmanim.sunset().getTime() + (18 * 60 * 1000)); // Add 18 minutes to sunset time
        break;
      case MINCHA_CHOL:
        hebrewDate = new Date(zmanim.sunset().getTime() - (10 * 60 * 1000)); // decrise 10 minutes to sunset time
        break;
    }
    if (hebrewDate) {
      result = hebrewDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    }

    return result;    
  }



}
