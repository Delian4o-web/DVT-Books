import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.scss'],
})
export class BookProfileComponent implements OnInit {
  bookISBN: string;
  bookInfo: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bookISBN = params.get('id');
    });

    this.bookService.getBook(this.bookISBN).subscribe((x) => {
      this.bookInfo = x;
    });
  }
}

