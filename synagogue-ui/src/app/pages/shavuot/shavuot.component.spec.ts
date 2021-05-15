import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShavuotComponent } from './shavuot.component';

describe('ShavuotComponent', () => {
  let component: ShavuotComponent;
  let fixture: ComponentFixture<ShavuotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShavuotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShavuotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
