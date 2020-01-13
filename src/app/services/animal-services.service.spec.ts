import { TestBed } from '@angular/core/testing';

import { AnimalServicesService } from './animal-services.service';

describe('AnimalServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimalServicesService = TestBed.get(AnimalServicesService);
    expect(service).toBeTruthy();
  });
});
