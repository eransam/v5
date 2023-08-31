import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazmadotHistoryPageComponent } from './hazmadot-history-page.component';

describe('HazmadotHistoryPageComponent', () => {
  let component: HazmadotHistoryPageComponent;
  let fixture: ComponentFixture<HazmadotHistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HazmadotHistoryPageComponent]
    });
    fixture = TestBed.createComponent(HazmadotHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
