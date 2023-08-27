import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePopupPinoyimComponent } from './page-popup-pinoyim.component';

describe('PagePopupPinoyimComponent', () => {
  let component: PagePopupPinoyimComponent;
  let fixture: ComponentFixture<PagePopupPinoyimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePopupPinoyimComponent]
    });
    fixture = TestBed.createComponent(PagePopupPinoyimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
