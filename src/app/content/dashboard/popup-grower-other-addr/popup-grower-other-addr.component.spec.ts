import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGrowerOtherAddrComponent } from './popup-grower-other-addr.component';

describe('PopupGrowerOtherAddrComponent', () => {
  let component: PopupGrowerOtherAddrComponent;
  let fixture: ComponentFixture<PopupGrowerOtherAddrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupGrowerOtherAddrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupGrowerOtherAddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
