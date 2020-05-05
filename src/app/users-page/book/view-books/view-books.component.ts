import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss'],
})
export class ViewBooksComponent implements OnInit {
  booksList: Book[];
  book: Book;

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((x) => {
      this.booksList = x;
    });
  }
}
