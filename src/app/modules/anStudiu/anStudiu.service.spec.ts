import { TestBed } from '@angular/core/testing';

import { AnStudiuService } from './anStudiu.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnStudiuService = TestBed.get(AnStudiuService);
    expect(service).toBeTruthy();
  });
});
