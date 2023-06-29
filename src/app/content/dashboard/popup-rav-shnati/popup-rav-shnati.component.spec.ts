import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRavShnatiComponent } from './popup-rav-shnati.component';

describe('PopupRavShnatiComponent', () => {
  let component: PopupRavShnatiComponent;
  let fixture: ComponentFixture<PopupRavShnatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupRavShnatiComponent]
    });
    fixture = TestBed.createComponent(PopupRavShnatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
