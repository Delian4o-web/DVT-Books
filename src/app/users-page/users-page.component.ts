import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  author: Author[];
  userRole = '';
  constructor(public auth: AuthService, private authorService: AuthorService) {}

  ngOnInit(): void {
    this.authorService.getAllAuthors().subscribe((x) => {
      this.author = x;
    });
  }
}
