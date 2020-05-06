import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  books: Book[] = [];
  searchString: string;
  errors = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  searchBooks() {
    this.bookService.getBookList(this.searchString).subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (err) => (this.errors = err),
    });
  }
}
