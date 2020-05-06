import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  books: Book[] = [];
  searchString: string;
  errors = '';
  loadMore = false;
  newBooks: Book[];

  top = 3;
  skip = 0;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.searchString = null;
    this.books = [];
  }

  // searchBooks() {
  //   this.bookService.getBookList(this.searchString).subscribe({
  //     next: (books) => {
  //       this.books = books;
  //     },
  //     error: (err) => (this.errors = err),
  //   });
  // }

  searchBooks() {
    this.bookService
      .getBookListPaginated(this.searchString, this.top, this.skip)
      .subscribe((x) => {
        x.forEach((element) => {
          this.books.push(element);
        });

        if (x.length < 3) {
          this.loadMore = false;
        }
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
