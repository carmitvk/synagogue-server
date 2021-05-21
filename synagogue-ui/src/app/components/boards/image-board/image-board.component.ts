import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/view1.interface';

@Component({
  selector: 'image-board',
  templateUrl: './image-board.component.html',
  styleUrls: ['./image-board.component.scss']
})
export class ImageBoardComponent implements OnInit {
  @Input() board: Board;

  constructor() { }

  ngOnInit(): void {
  }

}
