import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicsaYearToGrowerComponent } from './micsa-year-to-grower.component';

describe('MicsaYearToGrowerComponent', () => {
  let component: MicsaYearToGrowerComponent;
  let fixture: ComponentFixture<MicsaYearToGrowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicsaYearToGrowerComponent]
    });
    fixture = TestBed.createComponent(MicsaYearToGrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
