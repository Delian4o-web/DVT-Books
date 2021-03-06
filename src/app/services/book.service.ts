import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Book } from '../models/book';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUri}/Books`);
  }

  getBook(isbn13: string): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUri}/Books/${isbn13}`);
  }

  addBookPicture(isbn: string, file: File, delayDuration: number) {
    return this.http
      .put(`${environment.apiUri}/Books/${isbn}/picture`, file)
      .pipe(delay(delayDuration)
      );
  }

  getBookPicture(isbn: string) {
    return this.http.get(`${environment.apiUri}/Books/${isbn}/picture`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${environment.apiUri}/Books`, book);
  }

  updateBook(isbn13: string, bookToUpdate: Book): Observable<Book> {
    return this.http.put<Book>(
      `${environment.apiUri}/Books/${isbn13}`,
      bookToUpdate
    );
  }

  updateBookPicture(isbn13: string, imageFile: File): Observable<Book> {
    return this.http.put<Book>(
      `${environment.apiUri}/Books/${isbn13}/picture`,
      imageFile
    );
  }

  getBooks(query: string): Observable<Book[]> {
    let searchUrl = '';
    searchUrl = environment.apiUri + '/Books?query=' + query;
    return this.http.get<Book[]>(searchUrl);
  }

  getBookListPaginated(
    query: string,
    top: number,
    skip: number
  ): Observable<Book[]> {
    let searchUrl = '';
    searchUrl =
      environment.apiUri +
      '/Books?query=' +
      query +
      '&top=' +
      top +
      '&skip=' +
      skip;
    return this.http.get<Book[]>(searchUrl);
  }
}
