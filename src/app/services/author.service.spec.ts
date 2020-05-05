import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthorService } from './author.service';
import { singleAuthorMock, authorsMock } from '../utils/mockdata';
import { environment } from 'src/environments/environment';
import { Author } from '../models/author';
import { HttpClient, HttpResponse } from '@angular/common/http';

describe('AuthorService : API Requests', () => {
  let service: AuthorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthorService],
    });

    service = TestBed.inject(AuthorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getAuthor() should return one author', () => {
    service.getAuthor(singleAuthorMock.id).subscribe((authors) => {
      expect(authors).toEqual(singleAuthorMock);
    });

    const req = httpMock.expectOne(
      `${environment.apiUri}/Authors/${singleAuthorMock.id}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(singleAuthorMock);
  });

  it('getAllAuthors() should return all the authors >', () => {
    service.getAllAuthors().subscribe((authors) => {
      expect(authors).toEqual(authorsMock);
    });

    const req = httpMock.expectOne(`${environment.apiUri}/Authors`);
    expect(req.request.method).toBe('GET');
    req.flush(authorsMock);
  });

  it('addAuthor() should create a new author', () => {
    const author = new Author();
    author.first_name = singleAuthorMock.first_name;
    author.middle_names = singleAuthorMock.middle_names;
    author.last_name = singleAuthorMock.last_name;
    author.about = singleAuthorMock.about;

    service.addAuthor(author).subscribe();

    const req = httpMock.expectOne(`${environment.apiUri}/Authors`);

    httpMock.verify();
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(author);

    const expectedResponse = new HttpResponse({
      status: 201,
      statusText: 'Created',
      body: author,
    });
    req.event(expectedResponse);
  });

  it('updateAuthor() should update an author correctly', () => {
    const author = new Author();
    author.first_name = singleAuthorMock.first_name;
    author.middle_names = singleAuthorMock.middle_names;
    author.last_name = singleAuthorMock.last_name;
    author.about = singleAuthorMock.about;

    const updatedAuthor = new Author();
    author.first_name = 'Peter';
    author.middle_names = 'Stevenson';
    author.last_name = singleAuthorMock.last_name;
    author.about = singleAuthorMock.about;

    service.updateAuthor(updatedAuthor, singleAuthorMock.id).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiUri}/Authors/${singleAuthorMock.id}`
    );

    httpMock.verify();
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedAuthor);
  });
});
