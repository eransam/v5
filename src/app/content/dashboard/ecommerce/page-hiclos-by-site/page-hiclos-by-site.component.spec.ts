import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHiclosBySiteComponent } from './page-hiclos-by-site.component';

describe('PageHiclosBySiteComponent', () => {
  let component: PageHiclosBySiteComponent;
  let fixture: ComponentFixture<PageHiclosBySiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHiclosBySiteComponent]
    });
    fixture = TestBed.createComponent(PageHiclosBySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
