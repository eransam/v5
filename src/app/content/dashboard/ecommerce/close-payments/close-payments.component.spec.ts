import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePaymentsComponent } from './close-payments.component';

describe('ClosePaymentsComponent', () => {
  let component: ClosePaymentsComponent;
  let fixture: ComponentFixture<ClosePaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosePaymentsComponent],
    });
    fixture = TestBed.createComponent(ClosePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
