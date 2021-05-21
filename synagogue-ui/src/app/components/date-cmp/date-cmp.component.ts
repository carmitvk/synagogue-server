import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-cmp',
  templateUrl: './date-cmp.component.html',
  styleUrls: ['./date-cmp.component.scss']
})
export class DateCmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get currTime(){
    var date = Date.now();
    return date;
  }

}
