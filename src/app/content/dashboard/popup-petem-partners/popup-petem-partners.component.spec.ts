import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPetemPartnersComponent } from './popup-petem-partners.component';

describe('PopupPetemPartnersComponent', () => {
  let component: PopupPetemPartnersComponent;
  let fixture: ComponentFixture<PopupPetemPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPetemPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupPetemPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
