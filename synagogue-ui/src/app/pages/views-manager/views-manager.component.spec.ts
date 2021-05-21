import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsManagerComponent } from './views-manager.component';

describe('ViewsManagerComponent', () => {
  let component: ViewsManagerComponent;
  let fixture: ComponentFixture<ViewsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
