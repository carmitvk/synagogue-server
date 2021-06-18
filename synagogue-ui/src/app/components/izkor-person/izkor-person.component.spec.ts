import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzkorPersonComponent } from './izkor-person.component';

describe('IzkorPersonComponent', () => {
  let component: IzkorPersonComponent;
  let fixture: ComponentFixture<IzkorPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzkorPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzkorPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
