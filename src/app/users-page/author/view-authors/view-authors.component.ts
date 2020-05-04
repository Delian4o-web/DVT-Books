import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-view-authors',
  templateUrl: './view-authors.component.html',
  styleUrls: ['./view-authors.component.scss'],
})
export class ViewAuthorsComponent implements OnInit {
  authorsList: Author[];
  constructor(public authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe((x) => {
      this.authorsList = x;
    });
  }
}
