import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthorService } from './author.service';
import { singleAuthorMock, authorsMock } from '../utils/mockdata';
import { environment } from 'src/environments/environment';

describe('AuthorService : API Requests', () => {
  let injector: TestBed;
  let service: AuthorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService],
    });

    injector = getTestBed();
    service = TestBed.inject(AuthorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getAuthor() should return an Observable<Author>', () => {
    service.getAuthor(singleAuthorMock.id).subscribe((authors) => {
      expect(authors).toEqual(singleAuthorMock);
    });

    const req = httpMock.expectOne(
      `${environment.apiUri}/Authors/${singleAuthorMock.id}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(singleAuthorMock);
  });

  it('getAllAuthors()should return an Observable<Author[]>', () => {
    service.getAllAuthors().subscribe((authors) => {
      expect(authors).toEqual(authorsMock);
    });

    const req = httpMock.expectOne(`${environment.apiUri}/Authors`);
    expect(req.request.method).toBe('GET');
    req.flush(authorsMock);
  });
});
