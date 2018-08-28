import { TestBed, inject } from '@angular/core/testing';

import { AdmindetailsService } from './admindetails.service';

describe('AdmindetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmindetailsService]
    });
  });

  it('should be created', inject([AdmindetailsService], (service: AdmindetailsService) => {
    expect(service).toBeTruthy();
  }));
});
