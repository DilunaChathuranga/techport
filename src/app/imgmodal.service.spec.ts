import { TestBed } from '@angular/core/testing';

import { ImgmodalService } from './imgmodal.service';

describe('ImgmodalService', () => {
  let service: ImgmodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgmodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
