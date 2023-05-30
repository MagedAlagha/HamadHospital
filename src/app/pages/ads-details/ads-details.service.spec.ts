import { TestBed } from '@angular/core/testing';

import { AdsDetailsService } from './ads-details.service';

describe('AdsDetailsService', () => {
  let service: AdsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
