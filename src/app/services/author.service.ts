import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Author } from '../models/author';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  getAllAuthors(): Observable<Author[]> {
    return this.http
      .get<Author>(`${environment.apiUri}/Authors`)
      .pipe(map((res: any) => res as Author[]));
  }
}
