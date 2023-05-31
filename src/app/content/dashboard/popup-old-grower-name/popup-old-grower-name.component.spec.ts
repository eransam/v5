import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupOldGrowerNameComponent } from './popup-old-grower-name.component';

describe('PopupOldGrowerNameComponent', () => {
  let component: PopupOldGrowerNameComponent;
  let fixture: ComponentFixture<PopupOldGrowerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupOldGrowerNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupOldGrowerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
