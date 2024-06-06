import { TestBed } from '@angular/core/testing';

import { NgxTabitUiService } from './ngx-tabit-ui.service';

describe('NgxTabitUiService', () => {
  let service: NgxTabitUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTabitUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
