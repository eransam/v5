import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGrowerCardComponent } from './popup-grower-card.component';

describe('PopupGrowerCardComponent', () => {
  let component: PopupGrowerCardComponent;
  let fixture: ComponentFixture<PopupGrowerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupGrowerCardComponent]
    });
    fixture = TestBed.createComponent(PopupGrowerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
