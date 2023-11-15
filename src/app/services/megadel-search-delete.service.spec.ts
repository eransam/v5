import { TestBed } from '@angular/core/testing';

import { MegadelSearchDeleteService } from './megadel-search-delete.service';

describe('MegadelSearchDeleteService', () => {
  let service: MegadelSearchDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegadelSearchDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
