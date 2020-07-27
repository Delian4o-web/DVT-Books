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
  bookInfoUpdate: Book;
  bookISBNNumber: string;
  selectedFile: File;
  previewUrl: any = null;
  reader;

  constructor(
    private fb: FormBuilder,
    public bookService: BookService,
    public authorService: AuthorService,
    public tagService: TagService
  ) { }

  ngOnInit(): void {
    this.updateBookForm = this.fb.group({
      isbn10: ['', [Validators.required]], // Validators.pattern('^[0-9]{10}$')
      isbn13: ['', [Validators.required]], // Validators.pattern('[0-9]*[-| ][0-9]*[-| ][0-9]*[-| ][0-9]*[-| ][0-9]*'),
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

  get isbnNumber(): AbstractControl {
    return this.updateBookForm.get('isbn13');
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

      this.updateBookForm.patchValue({
        isbn10: this.chosenBook.isbn10,
        isbn13: this.chosenBook.isbn13,
        title: this.chosenBook.title,
        about: this.chosenBook.about,
        abstract: this.chosenBook.abstract,
        publisher: this.chosenBook.publisher,
        date_published: this.chosenBook.date_published,
        author: this.authorsList.find(
          (author) => author.id === this.chosenBook.author.id
        ).id,
      });
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.reader = new FileReader();

    this.reader.readAsDataURL(this.selectedFile);
    this.reader.onload = (_event) => {
      this.previewUrl = this.reader.result;
    };
  }

  updateBook() {
    this.bookInfoUpdate = this.updateBookForm.value;
    this.bookInfoUpdate.author = this.authorsList.find(
      (x) => x.id === this.author.value
    );
    this.bookInfoUpdate.tags = this.tagsList.filter(
      (x) => x.id === this.tags.value
    );

    // this.bookInfoUpdate.image = this.previewUrl;

    this.bookISBNNumber = this.isbnNumber.value;

    this.bookService
      .updateBook(this.bookISBNNumber, this.bookInfoUpdate)
      .subscribe((x) => {
        this.bookService.updateBookPicture(
          this.bookISBNNumber,
          this.selectedFile
        );
      });

    // alert(this.bookInfoUpdate.title + ' updated!');
    // window.location.reload();
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateBookForm.valid) {
      this.updateBook();
    }
  }
}
