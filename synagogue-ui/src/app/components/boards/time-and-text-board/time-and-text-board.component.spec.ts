import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAndTextBoardComponent } from './time-and-text-board.component';

describe('TimeAndTextBoardComponent', () => {
  let component: TimeAndTextBoardComponent;
  let fixture: ComponentFixture<TimeAndTextBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeAndTextBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAndTextBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
