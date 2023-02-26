import { TestBed } from '@angular/core/testing';

import { MedicalRehabilitationService } from './medical-rehabilitation.service';

describe('MedicalRehabilitationService', () => {
  let service: MedicalRehabilitationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalRehabilitationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
