import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPinoyimComponent } from './popup-pinoyim.component';

describe('PopupPinoyimComponent', () => {
  let component: PopupPinoyimComponent;
  let fixture: ComponentFixture<PopupPinoyimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupPinoyimComponent]
    });
    fixture = TestBed.createComponent(PopupPinoyimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
