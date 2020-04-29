import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Author } from '../models/author';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${environment.apiUri}/Authors`);
  }

  getAuthor(authorID: string): Observable<Author> {
    return this.http.get<Author>(`${environment.apiUri}/Authors/${authorID}`);
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http
      .post<Author>(`${environment.apiUri}/Authors`, author)
      .pipe(tap((data) => console.log('Author added :' + data)));
  }
}
