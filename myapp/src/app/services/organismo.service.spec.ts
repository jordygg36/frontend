import { TestBed } from '@angular/core/testing';

import { OrganismoService } from './organismo.service';

describe('OrganismoService', () => {
  let service: OrganismoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganismoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
