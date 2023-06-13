import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCertificatesComponent } from './popup-certificates.component';

describe('PopupCertificatesComponent', () => {
  let component: PopupCertificatesComponent;
  let fixture: ComponentFixture<PopupCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
