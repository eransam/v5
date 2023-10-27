import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSibaTableComponent } from './popup-siba-table.component';

describe('PopupSibaTableComponent', () => {
  let component: PopupSibaTableComponent;
  let fixture: ComponentFixture<PopupSibaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupSibaTableComponent]
    });
    fixture = TestBed.createComponent(PopupSibaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
