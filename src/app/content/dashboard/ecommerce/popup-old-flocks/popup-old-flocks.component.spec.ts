import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupOldFlocksComponent } from './popup-old-flocks.component';

describe('PopupOldFlocksComponent', () => {
  let component: PopupOldFlocksComponent;
  let fixture: ComponentFixture<PopupOldFlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupOldFlocksComponent]
    });
    fixture = TestBed.createComponent(PopupOldFlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
