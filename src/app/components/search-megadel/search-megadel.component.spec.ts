import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMegadelComponent } from './search-megadel.component';

describe('SearchMegadelComponent', () => {
  let component: SearchMegadelComponent;
  let fixture: ComponentFixture<SearchMegadelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMegadelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMegadelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
