import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CafeService } from './cafe.service';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[CafeService]
    });
    service = TestBed.inject(CafeService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
