import { TestBed } from '@angular/core/testing';

import { EmployeeEstablService } from './employee-establ.service';

describe('EmployeeEstablService', () => {
  let service: EmployeeEstablService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeEstablService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
