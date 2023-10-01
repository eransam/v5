import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShivokimHatalaComponent } from '../../popup-monthly-summary/popup-monthly-summary.component';

describe('PageShivokimHatalaComponent', () => {
  let component: PageShivokimHatalaComponent;
  let fixture: ComponentFixture<PageShivokimHatalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageShivokimHatalaComponent],
    });
    fixture = TestBed.createComponent(PageShivokimHatalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
