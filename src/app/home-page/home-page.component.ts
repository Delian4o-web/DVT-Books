import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
