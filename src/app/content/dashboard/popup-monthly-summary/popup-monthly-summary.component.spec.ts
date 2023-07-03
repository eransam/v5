import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMonthlySummaryComponent } from './popup-monthly-summary.component';

describe('PopupMonthlySummaryComponent', () => {
  let component: PopupMonthlySummaryComponent;
  let fixture: ComponentFixture<PopupMonthlySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMonthlySummaryComponent]
    });
    fixture = TestBed.createComponent(PopupMonthlySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
