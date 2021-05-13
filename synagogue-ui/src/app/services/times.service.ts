import axios from 'axios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TimesService {

  private gTimes: any;


  constructor(public http: HttpClient){}


  public async getTimes() {
    var currDate = this.getNowDate();
    console.log(currDate)
    const { data } = await axios.get(`https://www.hebcal.com/zmanim?cfg=json&geonameid=293918&date=${currDate}`)
    this.gTimes = data
    //here save to data/json file ???
    return this.gTimes;
  }


//get date now function
getNowDate() {
  //return string
  var returnDate = "";
  //get datetime now
  var today = new Date();
  //split
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //because January is 0! 
  var yyyy = today.getFullYear();
  //Interpolation date
  if (dd < 10) {
      returnDate += `0${dd}.`;
  } else {
      returnDate += `${dd}.`;
  }

  if (mm < 10) {
      returnDate += `0${mm}.`;
  } else {
      returnDate += `${mm}.`;
  }
  returnDate += yyyy;
  return returnDate;
}

}
