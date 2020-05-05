import { TestBed } from '@angular/core/testing';

import { TagService } from './tag.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('TagService', () => {
  let service: TagService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TagService],
    });

    service = TestBed.inject(TagService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getTags() should return all tags', () => {
    service.getTags().subscribe();
    const req = httpMock.expectOne(`${environment.apiUri}/Tags`);
    req.flush({});
    httpMock.verify();
    expect(httpMock).toBeTruthy();
  });
});
