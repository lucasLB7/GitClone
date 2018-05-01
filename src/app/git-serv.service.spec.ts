import { TestBed, inject } from '@angular/core/testing';

import { GitServService } from './git-serv.service';

describe('GitServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitServService]
    });
  });

  it('should be created', inject([GitServService], (service: GitServService) => {
    expect(service).toBeTruthy();
  }));
});
