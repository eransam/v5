import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShivokimFromImonToEndSiteComponent } from './page-shivokim-from-imon-to-end-site.component';

describe('PageShivokimFromImonToEndSiteComponent', () => {
  let component: PageShivokimFromImonToEndSiteComponent;
  let fixture: ComponentFixture<PageShivokimFromImonToEndSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageShivokimFromImonToEndSiteComponent]
    });
    fixture = TestBed.createComponent(PageShivokimFromImonToEndSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
