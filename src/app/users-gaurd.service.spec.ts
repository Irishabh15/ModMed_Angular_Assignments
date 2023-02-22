import { TestBed } from '@angular/core/testing';

import { UsersGaurdService } from './users-gaurd.service';

describe('UsersGaurdService', () => {
  let service: UsersGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
