import {HebrewCalendar, HDate, Location, Event, months, Zmanim, flags, ParshaEvent} from '@hebcal/core';

import { Injectable } from '@angular/core';


const SUNRISE = "zmanim.sunrise";
const SUNSET = "zmanim.sunset";
const SOF_ZMAN_SHMA_GRA = "zmanim.sofZmanShma";
const MINCHA_GEDOLA = "zmanim.minchaGedola";
const TZEIT_HAKOCHAVIM = "zmanim.tzeitHakochavim";
const SOF_ZMAN_SHMA_MGA = "zmanim.sofZmanShmaMGA";
const MINCHA_CHOL = "zmanim.minchaChol";

const ARVIT_MOTASH = "zmanim.arvitMotash";
const MINCHA_SHABAT = "zmanim.minchaShabat";
const LESSON_PARASHA = "zmanim.lessonPash";
const LESSON_GEMARA = "zmanim.lessonGemara";

const PARASHA = "calendar.parash"

@Injectable({
  providedIn: 'root',
})
export class TimesService {


  constructor(){
  //       let day = new HDate().subtract(10, 'd');
        
  //       let onOrAfterFriday = new HDate().onOrAfter(5);
  //       let onOrAfterSuterday = new HDate().onOrAfter(6);


  //   const options = {
  //     // start: onOrAfterFriday,
  //     // end : onOrAfterSuterday,
  //     year:2023,
  //     isHebrewYear: false,
  //     il:true,
  //     sedrot: true,
  //     omer: true,
  //     candlelighting: true,
  //     location: Location.lookup('Petach Tikvah'),
  //     locale: 'he',
  //     noRoshChodesh: true,
  //     shabbatMevarchim: true,
  //   }
  //   var events = HebrewCalendar.calendar(options);
  //   console.log('start');
  //   for (const ev of events) {
  //     if(ev.mask === 8208)continue;//ignore modern events like family day
  //     //  if(ev.mask !== 524288)continue;//ignore modern events like family day
  //     //  if(ev.mask !== flags.SPECIAL_SHABBAT)continue;//ignore modern events like family day
  //     const hd = ev.getDate();
  //     const date = hd.greg();
  //     // console.log(ev.render('he'));
  //     // console.log(ev); 
  //     // console.log(ev.getFlags()); 
  //   }
  //   let date = new HDate(0,0,2023)
  //   for(let i=0; i < 365; i++){
  //     date = date.next()
  //     this.getParash(date);
  //   }
  // }



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

  }
 



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
        hebrewDate = zmanim.sunsetOffset(18); // Add 18 minutes to sunset time
        break;
      case MINCHA_CHOL:
        hebrewDate = this.roundToNearestMinute(zmanim.sunsetOffset(-10)); // decrise 10 minutes to sunset time
        break;
      case MINCHA_SHABAT:
        hebrewDate = this.getMinchaJerusalem(); // decrise 10 minutes to sunset time
        break;
      case PARASHA:
        result = this.getParash();
        break;
      case ARVIT_MOTASH:
        hebrewDate = this.roundToNearestMinute(new Date(zmanim.tzeit().getTime() - (5 * 60 * 1000))); // decrise 10 minutes to sunset time
        break;
      case LESSON_PARASHA:
        hebrewDate = new Date(this.getMinchaJerusalem().getTime() - (130* 60 * 1000)); 
        break;
      case LESSON_GEMARA:
        hebrewDate = new Date(this.getMinchaJerusalem().getTime() - (70 * 60 * 1000));
        break;
    }
    if (hebrewDate) {
      result = hebrewDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    }

    return result;    
  }

  private getMinchaJerusalem(): Date {
    let locationJerusalem = Location.lookup('Jerusalem');
    let zmanimJerusalem = new Zmanim(new HDate(), locationJerusalem.getLatitude(), locationJerusalem.getLongitude());
    return this.roundToNearestMinute(zmanimJerusalem.sunsetOffset(-40));
  }

  public getParash(hdate: HDate = new HDate()) {
    // let onOrAfterFriday = new HDate().onOrAfter(5);
        let onOrAfterSuterday = hdate.onOrAfter(6);
    const options = {
      start: onOrAfterSuterday,
      end : onOrAfterSuterday,
      isHebrewYear: false,
      il:true,
      sedrot: true,
      omer: true,
      candlelighting: true,
      location: Location.lookup('Petach Tikvah'),
      locale: 'he',
      noRoshChodesh: true,
      shabbatMevarchim: true,
    }
    var events = HebrewCalendar.calendar(options);
    let parasha = events.filter(item => item.mask === 512 || item.mask === 1024).sort((a, b) => a.mask - b.mask)
    let result = '';
    if (parasha.length > 0) {
      result = parasha[0].render('he');
      if (parasha.length > 1) {
        result += ' - ' + parasha[1].render('he');
      }
      console.log('parash:' ,result);
    }
    return result;
  }


  public getTzetAshabat(hdate: HDate = new HDate()) {

    let onOrAfterSuterday = hdate.onOrAfter(6);
    const options = {
      start: onOrAfterSuterday,
      end : onOrAfterSuterday,
      isHebrewYear: false,
      il:true,
      sedrot: false,
      omer: true,
      candlelighting: true,
      location: Location.lookup('Petach Tikvah'),
      locale: 'he',
      noRoshChodesh: true,
    }
    var events = HebrewCalendar.calendar(options);
    let parasha = events.filter(item => item.mask === 512 || item.mask === 1024).sort((a, b) => a.mask - b.mask)
    let result = '';
    if (parasha.length > 0) {
      result = parasha[0].render('he');
      if (parasha.length > 1) {
        result += ' - ' + parasha[1].render('he');
      }
      console.log('parash:' ,result);
    }
    return result;
  }

  public roundToNearestMinute(date: Date): Date {
    var coeff = 1000 * 60 * 5; // <-- Replace {5} with interval
    return new Date(Math.ceil(date.getTime() / coeff) * coeff);
  };



}
