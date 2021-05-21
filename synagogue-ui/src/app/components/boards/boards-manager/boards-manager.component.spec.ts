import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsManagerComponent } from './boards-manager.component';

describe('BoardsManagerComponent', () => {
  let component: BoardsManagerComponent;
  let fixture: ComponentFixture<BoardsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
