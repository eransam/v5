import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddPricesComponent } from './popup-add-prices.component';

describe('PopupAddPricesComponent', () => {
  let component: PopupAddPricesComponent;
  let fixture: ComponentFixture<PopupAddPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAddPricesComponent]
    });
    fixture = TestBed.createComponent(PopupAddPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
