import { TestBed } from '@angular/core/testing';

import { CristalsService } from './cristals.service';

describe('CristalsService', () => {
  let service: CristalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CristalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
