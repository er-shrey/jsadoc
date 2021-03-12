import { TestBed } from '@angular/core/testing';

import { JsadocService } from './jsadoc.service';

describe('JsadocService', () => {
  let service: JsadocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsadocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
