import { Component, Input, OnInit } from '@angular/core';
import { izkorPerson } from 'src/app/models/view.interface-izkor';

@Component({
  selector: 'app-izkor-person',
  templateUrl: './izkor-person.component.html',
  styleUrls: ['./izkor-person.component.scss']
})
export class IzkorPersonComponent implements OnInit {
  @Input() izkorPerson: izkorPerson;
  constructor() { }

  ngOnInit(): void {
  }

}
