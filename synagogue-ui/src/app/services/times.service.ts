import {HebrewCalendar, HDate, Location, Event, months, Zmanim, flags, ParshaEvent, HavdalahEvent, OmerEvent} from '@hebcal/core';

import { Injectable } from '@angular/core';

const CURRENT_CITY = 'Petach Tikvah';
const SUNRISE = "zmanim.sunrise";
const SUNSET = "zmanim.sunset";
const SOF_ZMAN_SHMA_GRA = "zmanim.sofZmanShma";
const MINCHA_GEDOLA = "zmanim.minchaGedola";
const TZEIT_HAKOCHAVIM = "zmanim.tzeitHakochavim";
const SOF_ZMAN_SHMA_MGA = "zmanim.sofZmanShmaMGA";
const MINCHA_CHOL = "zmanim.minchaChol";

const KNISAT_HASHABAT = "zmanim.knisatHashabat";
const TZEIT_HASHABAT = "zmanim.tzeitHashabat";

const MINCHA_FRIDAY = "zmanim.minchaFriday";
const ARVIT_MOTASH = "zmanim.arvitMotash";
const MINCHA_SHABAT = "zmanim.minchaShabat";
const LESSON_PARASHA = "zmanim.lessonPash";
const LESSON_GEMARA = "zmanim.lessonGemara";
const OMER = "zmanim.omer";

const PARASHA = "calendar.parash"

@Injectable({
  providedIn: 'root',
})
export class TimesService {


  constructor(){
    let day = new HDate();
    // let omer = this.getOmer();
    // console.log(omer)
    // for (let index = 0; index < 52; index++) {
    //   let minchaShabat = this.getTimes('zmanim.minchaShabat');
    //   let arvitMotash = this.getTimes('zmanim.arvitMotash');

    //   let knisatHashabat = this.getTimes('zmanim.knisatHashabat');
    //   let lessonPash = this.getTimes('zmanim.tzeitHashabat');
      
    // }


        
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
  //     location: Location.lookup(CURRENT_CITY),
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
  //     this.getParasha(date);
  //   }
  // }



    // const options = {
    //   year: 2023,
    //   isHebrewYear: false,
    //   il:true,
    //   sedrot: true,
    //   omer: true,
    //   candlelighting: true,
    //   location: Location.lookup(CURRENT_CITY),
    //   locale: 'he',
    //   // start:new HDate(),
    //   // end: new HDate().next()
    // }

    // var location = Location.lookup(CURRENT_CITY);
    // var events = HebrewCalendar.calendar(options);
    // events = events.filter(item => item.mask === 32);

    // for (const ev of events) {
    //   const hd = ev.getDate();
    //   const date = hd.greg();
    //   // console.log(ev.render('he'));
    //   var zmanim = new Zmanim(hd, location.getLatitude(), location.getLongitude());
    //   console.log(ev.render('he'), 'tzeit=' + zmanim.tzeit(), 'from function' + this.getTzeitAshabat(hd), ev.date, ev); 
    //   // console.log('zmanim =', zmanim.tzeit());
    // }

    
    // let date = new HDate();
    
    // for (let index = 0; index < 365; index++) {
    //   var zmanim = new Zmanim(date, location.getLatitude(), location.getLongitude());
    //   // console.log('zmanim =', zmanim.tzeit());
    //   date = date.next()
    // }
    

  }
 



  public getTimes(time: string, hdate: HDate = new  HDate()): string {
    let location = Location.lookup(CURRENT_CITY);
    let zmanim = new Zmanim(hdate, location.getLatitude(), location.getLongitude());
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
      case MINCHA_FRIDAY:
        hebrewDate = this.roundToNearestMinute(zmanim.sunsetOffset(-10)); // decrise 10 minutes to sunset time
        break;
      case MINCHA_SHABAT:
        hebrewDate = this.getMinchaJerusalem(); // decrise 10 minutes to sunset time
        break;
      case PARASHA:
        result = this.getParasha();
        break;
      case ARVIT_MOTASH:
        hebrewDate = this.roundToNearestMinute(new Date(this.getTzeitAshabat().getTime() - (5 * 60 * 1000))); // decrise 5 minutes from tzeit
        break;
      case LESSON_PARASHA:
        hebrewDate = new Date(this.getMinchaJerusalem().getTime() - (130* 60 * 1000)); 
        break;
      case LESSON_GEMARA:
        hebrewDate = new Date(this.getMinchaJerusalem().getTime() - (70 * 60 * 1000));
        break;
      case KNISAT_HASHABAT:
        hebrewDate = zmanim.sunsetOffset(-20);
        break;
      case TZEIT_HASHABAT:
        hebrewDate = this.getTzeitAshabat();
        break;
      case OMER:
        result = this.getOmer();
        break;
    }
    if (hebrewDate) {
      result = hebrewDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    }

    return result;    
  }

  private getMinchaJerusalem(hdate: HDate = new HDate()): Date {
    let locationJerusalem = Location.lookup('Jerusalem');
    let onOrAfterSuterday = hdate.onOrAfter(6);
    let zmanimJerusalem = new Zmanim(onOrAfterSuterday, locationJerusalem.getLatitude(), locationJerusalem.getLongitude());
    return this.roundToNearestMinute(zmanimJerusalem.sunsetOffset(-40));
  }

  public getOmer(hdate: HDate = new HDate()) {
    const options = {
      start: hdate,
      end : hdate,
      isHebrewYear: false,
      il:true,
      sedrot: true,
      omer: true,
      candlelighting: false,
      location: Location.lookup(CURRENT_CITY),
      locale: 'he',
      noRoshChodesh: true,
      shabbatMevarchim: false,
    }
    var events = HebrewCalendar.calendar(options);
    const omerDays = events.filter(event => event.mask === 4096);
    let result = '';
    if (omerDays.length > 0) {
      result = omerDays[0]['omer'];
      // console.log('parash:' ,result);
    }
    return `היום ${result} ימים לעומר`;
  }

  public getParasha(hdate: HDate = new HDate()) {
    let onOrAfterSuterday = hdate.onOrAfter(6);
    const options = {
      start: onOrAfterSuterday,
      end : onOrAfterSuterday,
      isHebrewYear: false,
      il:true,
      sedrot: true,
      omer: false,
      candlelighting: false,
      location: Location.lookup(CURRENT_CITY),
      locale: 'he',
      noRoshChodesh: true,
      shabbatMevarchim: true,
    }
    var events = HebrewCalendar.calendar(options);
    let parasha = events.filter(item => item.mask === 512 || item.mask === 1024).sort((a, b) => b.mask - a.mask)
    let result = '';
    if (parasha.length > 0) {
      result = parasha[0].render('he');
      if (parasha.length > 1) {
        result += ' - ' + parasha[1].render('he');
      }
      // console.log('parash:' ,result);
    }
    return result;
  }


  public getTzeitAshabat(hdate: HDate = new HDate()): Date {
    let result;
    // console.log('date ' + hdate.getDay());
    let onOrAfterSuterday = hdate.onOrAfter(6);
    const options = {
      start: onOrAfterSuterday,
      end : onOrAfterSuterday,
      isHebrewYear: false,
      il:true,
      sedrot: false,
      omer: false,
      candlelighting: true,
      location: Location.lookup(CURRENT_CITY),
      locale: 'he',
      noRoshChodesh: true,
    }
    var events = HebrewCalendar.calendar(options);
    let tzeit = events.filter(item => item.mask === 32);
    if (!!tzeit?.length) {
      let tzeitEvent = tzeit[0]as HavdalahEvent;
      result = tzeitEvent.eventTime;
      // console.log('bb'+ result);
    }
    return result;
  }

  public roundToNearestMinute(date: Date): Date {
    var coeff = 1000 * 60 * 5; // <-- Replace {5} with interval
    return new Date(Math.ceil(date.getTime() / coeff) * coeff);
  };



}
