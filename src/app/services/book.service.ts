import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Book } from '../models/book';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUri}/Books`);
  }

  getBook(isbn13: string): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUri}/Books/${isbn13}`);
  }

  addBookPicture(isbn: string, file: File) {
    return this.http.put(`${environment.apiUri}/Books/${isbn}/picture`, file);
  }

  getBookPicture(isbn: string) {
    return this.http.get(`${environment.apiUri}/Books/${isbn}/picture`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http
      .post<Book>(`${environment.apiUri}/Books`, book)
      .pipe(tap((data) => console.log('Book added :' + data)));
  }

  updateBook(isbn13: string, bookToUpdate: Book): Observable<Book> {
    return this.http.put<Book>(
      `${environment.apiUri}/Books/${isbn13}`,
      bookToUpdate
    );
  }

  updateBookPicture(isbn13: string, bookToUpdate: Book): Observable<Book> {
    return this.http.put<Book>(
      `${environment.apiUri}/Books/${isbn13}`,
      bookToUpdate
    );
  }
}
