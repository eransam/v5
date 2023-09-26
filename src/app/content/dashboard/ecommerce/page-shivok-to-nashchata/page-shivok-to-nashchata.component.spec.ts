import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShivokToNashchataComponent } from './page-shivok-to-nashchata.component';

describe('PageShivokToNashchataComponent', () => {
  let component: PageShivokToNashchataComponent;
  let fixture: ComponentFixture<PageShivokToNashchataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageShivokToNashchataComponent]
    });
    fixture = TestBed.createComponent(PageShivokToNashchataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
