import { TestBed } from '@angular/core/testing';

import { DgUiLibraryService } from './dg-ui-library.service';

describe('DgUiLibraryService', () => {
  let service: DgUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
