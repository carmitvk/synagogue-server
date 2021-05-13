import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCmpComponent } from './date-cmp.component';

describe('DateCmpComponent', () => {
  let component: DateCmpComponent;
  let fixture: ComponentFixture<DateCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
