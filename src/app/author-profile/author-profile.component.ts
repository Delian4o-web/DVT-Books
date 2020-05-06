import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author';
import { Book } from '../models/book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.scss'],
})
export class AuthorProfileComponent implements OnInit {
  authorID: string;
  authorInfo: Author = null;
  books: Book[] = [];
  bookISBN: string[];

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.authorID = params.get('id');
    });

    this.authorService.getAuthor(this.authorID).subscribe((x) => {
      this.authorInfo = x;
    });
  }

  backClicked() {
    this.location.back();
  }
}
