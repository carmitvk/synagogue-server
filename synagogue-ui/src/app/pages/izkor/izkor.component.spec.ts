import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzkorComponent } from './izkor.component';

describe('IzkorComponent', () => {
  let component: IzkorComponent;
  let fixture: ComponentFixture<IzkorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzkorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzkorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
