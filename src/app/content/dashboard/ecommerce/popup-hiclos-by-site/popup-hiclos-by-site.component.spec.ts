import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupHiclosBySiteComponent } from './popup-hiclos-by-site.component';

describe('PopupHiclosBySiteComponent', () => {
  let component: PopupHiclosBySiteComponent;
  let fixture: ComponentFixture<PopupHiclosBySiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupHiclosBySiteComponent]
    });
    fixture = TestBed.createComponent(PopupHiclosBySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
