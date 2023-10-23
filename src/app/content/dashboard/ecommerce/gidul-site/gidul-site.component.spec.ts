import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GidulSiteComponent } from './gidul-site.component';

describe('GidulSiteComponent', () => {
  let component: GidulSiteComponent;
  let fixture: ComponentFixture<GidulSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GidulSiteComponent]
    });
    fixture = TestBed.createComponent(GidulSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
