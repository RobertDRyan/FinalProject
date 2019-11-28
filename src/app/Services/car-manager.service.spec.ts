import { TestBed } from '@angular/core/testing';

import { CarManagerService } from './car-manager.service';

describe('CarManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarManagerService = TestBed.get(CarManagerService);
    expect(service).toBeTruthy();
  });
});
