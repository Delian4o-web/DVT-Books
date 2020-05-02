import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss'],
})
export class AddBooksComponent implements OnInit {
  registerBookForm: FormGroup;
  submitted = false;
  selectedGroup: any;
  chosenAuthor: Author;
  authorsList: Author[];
  book = new Book();
  tagsList: Tag[];

  constructor(
    private fb: FormBuilder,
    public bookService: BookService,
    public authorService: AuthorService,
    public customValidator: IsbnvalidationService,
    public tagService: TagService
  ) {}

  ngOnInit(): void {
    this.registerBookForm = this.fb.group({
      isbn10: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      isbn13: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '[0-9]*[-| ][0-9]*[-| ][0-9]*[-| ][0-9]*[-| ][0-9]*'
          ),
        ],
      ],
      title: ['', [Validators.required]],
      about: [''],
      abstract: [''],
      author: [''],
      publisher: [''],
      date_published: [''],
      image: [''],
      tags: [''],
    });

    this.authorService.getAllAuthors().subscribe((x) => {
      this.authorsList = x;
    });

    this.tagService.getTags().subscribe((x) => {
      this.tagsList = x;
    });
  }

  get author(): AbstractControl {
    return this.registerBookForm.get('author');
  }

  get tags(): AbstractControl {
    return this.registerBookForm.get('tags');
  }

  get date(): AbstractControl {
    return this.registerBookForm.get('date_published');
  }

  getVal() {
    this.authorService.getAuthor(this.selectedGroup.id).subscribe((x) => {
      this.chosenAuthor = x;
    });
  }

  get registerFormControl() {
    return this.registerBookForm.controls;
  }

  addBook() {
    this.book = this.registerBookForm.value;
    this.book.author = this.authorsList.find((x) => x.id === this.author.value);
    this.book.tags = this.tagsList.filter((x) => x.id === this.tags.value);
    this.bookService.addBook(this.book).subscribe();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerBookForm.valid) {
      this.addBook();
    }
  }
}
