import { TestBed, getTestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { singleBookMock, booksMock } from 'src/app/utils/mockdata';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

interface MockFile {
  name: string;
  body: string;
  mimeType: string;
}

const createFileFromMockFile = (file: MockFile): File => {
  const blob = new Blob([file.body], { type: file.mimeType }) as any;
  blob.lastModifiedDate = new Date();
  blob.name = file.name;
  return blob as File;
};

const createMockFileList = (files: MockFile[]) => {
  const fileList: FileList = {
    length: files.length,
    item(index: number): File {
      return fileList[index];
    }
  };
  files.forEach((file, index) => fileList[index] = createFileFromMockFile(file));

  return fileList;
};

describe('BookService : API Requests', () => {
  let service: BookService;
  let httpMock: HttpTestingController;
  let file;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });

    file = createMockFileList([
      {
        body: 'test',
        mimeType: 'text/plain',
        name: 'test.jpg'
      }
    ]);
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getBook() should return one book', () => {
    const bookISBN = '9780133966152';
    service.getBook(bookISBN).subscribe();
    const req = httpMock.expectOne(`${environment.apiUri}/Books/${bookISBN}`);
    req.flush({});
    httpMock.verify();
    expect(req.request.method).toBe('GET');
    expect(httpMock).toBeTruthy();
  });

  it('getBookPicture() should return a books picture', () => {
    const bookISBN = '9780133966152';
    service.getBookPicture(bookISBN).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiUri}/Books/${bookISBN}/picture`
    );
    req.flush({});
    httpMock.verify();
    expect(req.request.method).toBe('GET');
    expect(httpMock).toBeTruthy();
  });

  it('getAllBooks() should return all the books', () => {
    service.getAllBooks().subscribe();
    const req = httpMock.expectOne(`${environment.apiUri}/Books`);
    req.flush({});
    httpMock.verify();
    expect(req.request.method).toBe('GET');
    expect(httpMock).toBeTruthy();
  });

  it('addBook() should create a new book', () => {
    service.addBook(singleBookMock).subscribe();
    httpMock.expectOne(environment.booksBaseURL);
    httpMock.verify();
    expect(httpMock).toBeTruthy();
  });

  it('updateBook() should update a book', () => {
    const bookToUpdate = new Book();
    bookToUpdate.isbn13 = '9781945256905';
    service.updateBook(bookToUpdate.isbn13, bookToUpdate).subscribe();

    const req = httpMock.expectOne(`${environment.apiUri}/Books/${bookToUpdate.isbn13}`);
    req.flush({});
    httpMock.verify();
    expect(req.request.method).toBe('PUT');
    expect(httpMock).toBeTruthy();
  });

  it('addBookPicture() should add a book picture', () => {
    const book = new Book();
    book.isbn13 = '9781945256905';
    service.addBookPicture(book.isbn13, file, 3).subscribe();

    const req = httpMock.expectOne(`${environment.apiUri}/Books/${book.isbn13}/picture`);
    req.flush({});
    httpMock.verify();
    expect(req.request.method).toBe('PUT');
    expect(httpMock).toBeTruthy();
  });


  it('updateBookPicture() should update a book picture', () => {
    const book = new Book();
    book.isbn13 = '9781945256905';
    service.updateBookPicture(book.isbn13, file).subscribe();

    const req = httpMock.expectOne(`${environment.apiUri}/Books/${book.isbn13}/picture`);
    req.flush({});
    httpMock.verify();
    expect(req.request.method).toBe('PUT');
    expect(httpMock).toBeTruthy();
  });

  it('getBooks() should return a searched book', () => {
    const searchQuery = 'Code';
    service.getBooks(searchQuery).subscribe();
    const req = httpMock.expectOne(`${environment.apiUri}/Books?query=` + searchQuery);
    req.flush({});
    httpMock.verify();
    expect(req.request.method).toBe('GET');
    expect(httpMock).toBeTruthy();
  });

  it('getBookListPaginated() should return a form of paginated books', () => {
    const searchQuery = 'Code';
    const top = 3;
    const skip = 0;
    service.getBookListPaginated(searchQuery, top, skip).subscribe();
    const req = httpMock.expectOne(`${environment.apiUri}/Books?query=` + searchQuery + '&top=' + top + '&skip=' + skip);
    req.flush({});
    httpMock.verify();
    expect(req.request.method).toBe('GET');
    expect(httpMock).toBeTruthy();
  });


});
