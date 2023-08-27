import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPageComponent } from './popup-page.component';

describe('PopupPageComponent', () => {
  let component: PopupPageComponent;
  let fixture: ComponentFixture<PopupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupPageComponent]
    });
    fixture = TestBed.createComponent(PopupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
