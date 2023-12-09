import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidPageComponent } from './mid-page.component';

describe('MidPageComponent', () => {
  let component: MidPageComponent;
  let fixture: ComponentFixture<MidPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidPageComponent]
    });
    fixture = TestBed.createComponent(MidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
