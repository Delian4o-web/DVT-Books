import { TestBed, getTestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { singleBookMock, booksMock } from 'src/app/utils/mockdata';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

describe('BookService : API Requests', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });

    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBook() should return one book', () => {
    const bookISBN: string = '9780133966152';
    service.getBook(bookISBN).subscribe();
    const req = httpMock.expectOne(`${environment.apiUri}/Books/${bookISBN}`);
    req.flush({});
    httpMock.verify();
    expect(httpMock).toBeTruthy();
  });

  it('getBookPicture() should return a specificed books picture', () => {
    const bookISBN: string = '9780133966152';
    service.getBookPicture(bookISBN).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiUri}/Books/${bookISBN}/picture`
    );
    req.flush({});
    httpMock.verify();
    expect(httpMock).toBeTruthy();
  });

  it('getAllBooks() should return all the books', () => {
    service.getAllBooks().subscribe();
    const req = httpMock.expectOne(`${environment.apiUri}/Books`);
    req.flush({});
    httpMock.verify();
    expect(httpMock).toBeTruthy();
  });

  it('addBook() should create a new book', () => {
    const newBook = new Book();
    newBook.about = singleBookMock.about;
    newBook.title = singleBookMock.title;
    newBook.isbn13 = singleBookMock.isbn13;
    newBook.isbn10 = singleBookMock.isbn10;

    service.addBook(newBook).subscribe();
    httpMock.expectOne('http://localhost:4201/Books');
    httpMock.verify();
    expect(httpMock).toBeTruthy();
  });

  it('updateBook() should update a book', () => {
    const bookToUpdate = new Book();
    bookToUpdate.isbn13 = '9781945256905';
    service.updateBook(bookToUpdate.isbn13, bookToUpdate).subscribe();

    httpMock.expectOne(`${environment.apiUri}/Books/${bookToUpdate.isbn13}`);
    httpMock.verify();
    expect(httpMock).toBeTruthy();
  });
});
