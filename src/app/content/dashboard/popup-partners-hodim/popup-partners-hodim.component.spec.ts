import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPartnersHodimComponent } from './popup-partners-hodim.component';

describe('PopupPartnersHodimComponent', () => {
  let component: PopupPartnersHodimComponent;
  let fixture: ComponentFixture<PopupPartnersHodimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupPartnersHodimComponent]
    });
    fixture = TestBed.createComponent(PopupPartnersHodimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
