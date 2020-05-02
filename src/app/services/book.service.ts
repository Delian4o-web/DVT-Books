import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Book } from '../models/book';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  addBook(book: Book): Observable<Book> {
    return this.http
      .post<Book>(`${environment.apiUri}/Books`, book)
      .pipe(tap((data) => console.log('Book added :' + data)));
  }
}
