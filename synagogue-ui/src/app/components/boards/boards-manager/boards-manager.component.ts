import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Board } from 'src/app/models/view.interface';

@Component({
  selector: 'boards-manager',
  templateUrl: './boards-manager.component.html',
  styleUrls: ['./boards-manager.component.scss']
})
export class BoardsManagerComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject();

  public displayedBoard: Board;
  public toggleAnimation: boolean = true;

  @Input() set data(boards: Array<Board>) {
    this.updateBoard(boards, 0);
  }

  constructor() {
  }

  private updateBoard(boards: Array<Board>, index: number): void {
    this.displayedBoard = boards[index];
    this.toggleAnimation = !this.toggleAnimation;
    if(this.displayedBoard.durationSec > 0 ){
      timer(this.displayedBoard.durationSec * 1000).pipe(
        tap(() => {
          this.updateBoard(boards, (index + 1) % boards.length);
        }),
        take(1),
      ).subscribe();
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}


