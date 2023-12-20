import { TestBed } from '@angular/core/testing';

import { GestionDBService } from './gestion-db.service';

describe('GestionDBService', () => {
  let service: GestionDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
