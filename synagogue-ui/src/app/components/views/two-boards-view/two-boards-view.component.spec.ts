import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBoardsViewComponent } from './two-boards-view.component';

describe('TwoBoardsViewComponent', () => {
  let component: TwoBoardsViewComponent;
  let fixture: ComponentFixture<TwoBoardsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoBoardsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBoardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
