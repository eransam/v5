import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupShowAllCertificateTransferComponent } from './popup-show-all-certificate-transfer.component';

describe('PopupShowAllCertificateTransferComponent', () => {
  let component: PopupShowAllCertificateTransferComponent;
  let fixture: ComponentFixture<PopupShowAllCertificateTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupShowAllCertificateTransferComponent]
    });
    fixture = TestBed.createComponent(PopupShowAllCertificateTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
