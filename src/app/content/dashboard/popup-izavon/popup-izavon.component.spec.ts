import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupIzavonComponent } from './popup-izavon.component';

describe('PopupIzavonComponent', () => {
  let component: PopupIzavonComponent;
  let fixture: ComponentFixture<PopupIzavonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupIzavonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupIzavonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
