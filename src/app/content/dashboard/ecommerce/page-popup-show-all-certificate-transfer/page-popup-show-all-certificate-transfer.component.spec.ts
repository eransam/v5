import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePopupShowAllCertificateTransferComponent } from './page-popup-show-all-certificate-transfer.component';

describe('PagePopupShowAllCertificateTransferComponent', () => {
  let component: PagePopupShowAllCertificateTransferComponent;
  let fixture: ComponentFixture<PagePopupShowAllCertificateTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePopupShowAllCertificateTransferComponent]
    });
    fixture = TestBed.createComponent(PagePopupShowAllCertificateTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
