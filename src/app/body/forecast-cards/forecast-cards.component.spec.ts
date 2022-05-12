import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardsComponent } from './forecast-cards.component';

describe('ForecastCardsComponent', () => {
  let component: ForecastCardsComponent;
  let fixture: ComponentFixture<ForecastCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
