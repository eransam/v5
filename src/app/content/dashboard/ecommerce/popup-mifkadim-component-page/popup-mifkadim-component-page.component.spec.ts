import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMifkadimComponentPageComponent } from './popup-mifkadim-component-page.component';

describe('PopupMifkadimComponentPageComponent', () => {
  let component: PopupMifkadimComponentPageComponent;
  let fixture: ComponentFixture<PopupMifkadimComponentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMifkadimComponentPageComponent]
    });
    fixture = TestBed.createComponent(PopupMifkadimComponentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
