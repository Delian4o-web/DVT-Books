import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  registerAuthorForm: FormGroup;
  updateAuthorForm: FormGroup;
  submitted = false;
  author = new Author();
  authorsList: Author[];
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

    this.updateAuthorForm = this.fb.group({
      buttonView: [''],
      authorsList: [''],
      first_name: ['', Validators.required],
      middle_names: [''],
      last_name: ['', [Validators.required]],
      about: [''],
    });

    this.authorService.getAllAuthors().subscribe((x) => {
      this.authorsList = x;
    });
  }

  getVal() {
    console.log(this.selectedGroup.id);

    this.authorService.getAuthor(this.selectedGroup.id).subscribe((x) => {
      this.chosenAuthor = x;
      console.log(this.chosenAuthor);
    });
  }

  get registerFormControl() {
    return this.registerAuthorForm.controls;
  }

  get registerUpdateFormControl() {
    return this.updateAuthorForm.controls;
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
    }
  }

  onUpdate() {}
}
