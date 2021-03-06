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
import { Observable } from 'rxjs/internal/Observable';

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
  selectedTags: { id: string; href: string; description: string }[] = [];
  selectedFile: File;
  bookISBNNumber: string;

  constructor(
    private fb: FormBuilder,
    public bookService: BookService,
    public authorService: AuthorService,
    public tagService: TagService
  ) { }

  ngOnInit(): void {
    this.registerBookForm = this.fb.group({
      isbn10: ['', [Validators.required, Validators.pattern('^[0-9-]*$')]],
      isbn13: [
        '',
        [
          Validators.required,
          // Validators.pattern(
          //   '[0-9]*[-| ][0-9]*[-| ][0-9]*[-| ][0-9]*[-| ][0-9]*'
          // ),
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

  get tags(): AbstractControl {
    return this.registerBookForm.get('tags');
  }

  get isbnNumber(): AbstractControl {
    return this.registerBookForm.get('isbn13');
  }

  get author(): AbstractControl {
    return this.registerBookForm.get('author');
  }

  get date(): AbstractControl {
    return this.registerBookForm.get('date_published');
  }

  get bookTitle(): AbstractControl {
    return this.registerBookForm.get('title');
  }

  get registerFormControl() {
    return this.registerBookForm.controls;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  addBook() {
    this.book = this.registerBookForm.value;
    this.book.author = this.authorsList.find((x) => x.id === this.author.value);

    for (let index = 0; index <= this.tags.value.length - 1; index++) {
      const selected = this.tagsList.find(
        (x) => x.id === this.tags.value[index]
      );
      this.selectedTags.push(selected);
      this.book.tags = this.selectedTags;
    }

    this.bookISBNNumber = this.isbnNumber.value;

    this.bookService.addBook(this.book).subscribe((x) => {
      this.bookService
        .addBookPicture(this.bookISBNNumber, this.selectedFile, 4000)
        .subscribe();
    });



    // alert(this.bookTitle.value + ' added!');
    // window.location.reload();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerBookForm.valid) {
      this.addBook();
    }
  }
}
