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
  loadMore = false;
  newBooks: Book[];

  top = 3;
  skip = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.searchString = null;
    this.books = [];
  }

  searchBooks() {
    this.bookService
      .getBookListPaginated(this.searchString, this.top, this.skip)
      .subscribe((x) => {
        if (x.length < 3) {
          this.loadMore = false;
        }
        x.forEach((element) => {
          this.books.push(element);
        });
      });
    this.loadMore = true;
  }

  viewMoreBooks() {
    if (this.loadMore) {
      this.skip += 3;
      this.searchBooks();
    }
  }
}
