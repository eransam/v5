import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupOldGrowerComponent } from './popup-old-grower.component';

describe('PopupOldGrowerComponent', () => {
  let component: PopupOldGrowerComponent;
  let fixture: ComponentFixture<PopupOldGrowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupOldGrowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupOldGrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
