import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { AuthorService } from 'src/app/services/author.service';
import { TagService } from 'src/app/services/tag.service';
import { Author } from 'src/app/models/author';
import { Tag } from 'src/app/models/tag';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.scss'],
})
export class EditBooksComponent implements OnInit {
  updateBookForm: FormGroup;
  submitted = false;
  selectedGroup: any;
  authorsList: Author[];
  tagsList: Tag[];
  booksList: Book[];
  chosenBook: Book;
  selectedISBNNo: string;

  constructor(
    private fb: FormBuilder,
    public bookService: BookService,
    public authorService: AuthorService,
    public tagService: TagService
  ) {}

  ngOnInit(): void {
    this.updateBookForm = this.fb.group({
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

    this.bookService.getAllBooks().subscribe((x) => {
      this.booksList = x;
    });

    this.tagService.getTags().subscribe((x) => {
      this.tagsList = x;
    });
  }

  get author(): AbstractControl {
    return this.updateBookForm.get('author');
  }

  get tags(): AbstractControl {
    return this.updateBookForm.get('tags');
  }

  get registerFormControl() {
    return this.updateBookForm.controls;
  }

  getBook() {
    this.selectedISBNNo = this.selectedGroup.isbn13;

    this.bookService.getBook(this.selectedISBNNo).subscribe((x) => {
      this.chosenBook = x;
    });
  }

  updateBook() {
    // this.book = this.updateBookForm.value;
    // this.book.author = this.authorsList.find((x) => x.id === this.author.value);
    // this.book.tags = this.tagsList.filter((x) => x.id === this.tags.value);
    // this.bookService.addBook(this.book).subscribe();
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateBookForm.valid) {
      this.updateBook();
    }
  }
}
