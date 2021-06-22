import { TestBed } from '@angular/core/testing';

import { ServicesSubscribedService } from './services-subscribed.service';

describe('ServicesSubscribedService', () => {
  let service: ServicesSubscribedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesSubscribedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
