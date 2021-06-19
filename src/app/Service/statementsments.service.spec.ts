import { TestBed } from '@angular/core/testing';

import { StatementsmentsService } from './statementsments.service';

describe('StatementsmentsService', () => {
  let service: StatementsmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatementsmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
