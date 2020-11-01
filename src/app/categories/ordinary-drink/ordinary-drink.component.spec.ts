import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinaryDrinkComponent } from './ordinary-drink.component';

describe('OrdinaryDrinkComponent', () => {
  let component: OrdinaryDrinkComponent;
  let fixture: ComponentFixture<OrdinaryDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinaryDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinaryDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
