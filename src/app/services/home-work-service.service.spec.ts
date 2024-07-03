import { TestBed } from '@angular/core/testing';

import { HomeWorkServiceService } from './home-work-service.service';

describe('HomeWorkServiceService', () => {
  let service: HomeWorkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeWorkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
