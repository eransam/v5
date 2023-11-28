import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMsgComponent } from './confirm-msg.component';

describe('ConfirmMsgComponent', () => {
  let component: ConfirmMsgComponent;
  let fixture: ComponentFixture<ConfirmMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmMsgComponent]
    });
    fixture = TestBed.createComponent(ConfirmMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
