import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMoreInfoGrowerComponent } from './popup-more-info-grower.component';

describe('PopupMoreInfoGrowerComponent', () => {
  let component: PopupMoreInfoGrowerComponent;
  let fixture: ComponentFixture<PopupMoreInfoGrowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupMoreInfoGrowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupMoreInfoGrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
