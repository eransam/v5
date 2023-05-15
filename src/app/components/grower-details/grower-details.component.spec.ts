import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowerDetailsComponent } from './grower-details.component';

describe('GrowerDetailsComponent', () => {
  let component: GrowerDetailsComponent;
  let fixture: ComponentFixture<GrowerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
