import { TestBed } from '@angular/core/testing';

import { MegadelSearchInsertService } from './megadel-search-insert.service';

describe('MegadelSearchInsertService', () => {
  let service: MegadelSearchInsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegadelSearchInsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
