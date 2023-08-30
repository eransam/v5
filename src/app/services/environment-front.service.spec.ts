import { TestBed } from '@angular/core/testing';

import { EnvironmentFrontService } from './environment-front.service';

describe('EnvironmentFrontService', () => {
  let service: EnvironmentFrontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentFrontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
