import { Component, Input, OnInit } from '@angular/core';
import { IzkorPerson } from 'src/app/models/view.interface-izkor';

@Component({
  selector: 'app-izkor-person',
  templateUrl: './izkor-person.component.html',
  styleUrls: ['./izkor-person.component.scss']
})
export class IzkorPersonComponent implements OnInit {
  @Input() izkorPerson: IzkorPerson;
  constructor() { }

  ngOnInit(): void {
  }

}
