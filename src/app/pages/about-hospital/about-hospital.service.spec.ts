import { TestBed } from '@angular/core/testing';

import { AboutHospitalService } from './about-hospital.service';

describe('AboutHospitalService', () => {
  let service: AboutHospitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutHospitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
