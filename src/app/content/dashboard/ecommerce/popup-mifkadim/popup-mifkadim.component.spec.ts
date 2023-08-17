import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMifkadimComponent } from './popup-mifkadim.component';

describe('PopupMifkadimComponent', () => {
  let component: PopupMifkadimComponent;
  let fixture: ComponentFixture<PopupMifkadimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMifkadimComponent]
    });
    fixture = TestBed.createComponent(PopupMifkadimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
