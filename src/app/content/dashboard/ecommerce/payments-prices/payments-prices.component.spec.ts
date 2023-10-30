import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsPricesComponent } from './payments-prices.component';

describe('PaymentsPricesComponent', () => {
  let component: PaymentsPricesComponent;
  let fixture: ComponentFixture<PaymentsPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentsPricesComponent]
    });
    fixture = TestBed.createComponent(PaymentsPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
