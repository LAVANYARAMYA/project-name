import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRateComponent } from './stock-rate.component';

describe('StockRateComponent', () => {
  let component: StockRateComponent;
  let fixture: ComponentFixture<StockRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockRateComponent]
    });
    fixture = TestBed.createComponent(StockRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
