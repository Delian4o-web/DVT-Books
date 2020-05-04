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
  imageFile: any;

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((x) => {
      this.booksList = x;
    });

    // this.bookService.getBookPicture('9782001758807').subscribe((x) => {
    //   this.imageFile = x;
    //   console.log(this.imageFile);
    // });
  }
}
