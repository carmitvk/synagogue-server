import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzkorViewComponent } from './izkor-view.component';

describe('IzkorViewComponent', () => {
  let component: IzkorViewComponent;
  let fixture: ComponentFixture<IzkorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzkorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzkorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
