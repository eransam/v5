import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuarantineComponent } from './page-quarantine.component';

describe('PageQuarantineComponent', () => {
  let component: PageQuarantineComponent;
  let fixture: ComponentFixture<PageQuarantineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuarantineComponent]
    });
    fixture = TestBed.createComponent(PageQuarantineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
