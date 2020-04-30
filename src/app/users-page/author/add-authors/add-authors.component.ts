import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.scss'],
})
export class AddAuthorsComponent implements OnInit {
  registerAuthorForm: FormGroup;
  submitted = false;
  author = new Author();
  authorsList: Author[];
  updateAuthor: Author;
  selectedGroup: any;
  chosenAuthor: Author;
  authorID;

  constructor(private fb: FormBuilder, public authorService: AuthorService) {}

  ngOnInit() {
    this.registerAuthorForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_names: [''],
      last_name: ['', [Validators.required]],
      about: [''],
    });

    this.authorService.getAllAuthors().subscribe((x) => {
      this.authorsList = x;
    });
  }

  get registerFormControl() {
    return this.registerAuthorForm.controls;
  }

  addAuthor() {
    this.author = this.registerAuthorForm.value;
    this.authorService.addAuthor(this.author).subscribe();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerAuthorForm.valid) {
      this.addAuthor();
      alert('Author Added!');
      window.location.reload();
    }
  }
}
