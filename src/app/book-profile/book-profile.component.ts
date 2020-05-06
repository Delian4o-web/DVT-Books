import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.scss'],
})
export class BookProfileComponent implements OnInit {
  bookISBN: string;
  bookInfo: Book;
  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bookISBN = params.get('id');
    });

    this.bookService.getBook(this.bookISBN).subscribe((x) => {
      this.bookInfo = x;
    });

    this.bookService.getBookPicture(this.bookISBN).subscribe((x) => {
      this.book = x;
    });
  }

  backClicked() {
    this.location.back();
  }
}
