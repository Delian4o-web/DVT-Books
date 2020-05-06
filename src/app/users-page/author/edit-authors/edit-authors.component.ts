import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.scss'],
})
export class EditAuthorsComponent implements OnInit {
  updateAuthorForm: FormGroup;
  submitted = false;
  author = new Author();
  authorsList: Author[];
  updateAuthor: Author;
  selectedGroup: any;
  chosenAuthor: Author;
  authorID;

  constructor(private fb: FormBuilder, public authorService: AuthorService) {}

  ngOnInit() {
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

      this.updateAuthorForm.patchValue({
        first_name: this.chosenAuthor.first_name,
        middle_names: this.chosenAuthor.middle_names,
        last_name: this.chosenAuthor.last_name,
        about: this.chosenAuthor.about,
      });
    });
  }

  get registerUpdateFormControl() {
    return this.updateAuthorForm.controls;
  }

  updateAnAuthor() {
    this.updateAuthor = new Author();
    this.updateAuthor = this.updateAuthorForm.value;
    this.authorService
      .updateAuthor(this.updateAuthor, this.selectedGroup.id)
      .subscribe((data) => {
        console.log(data);
      });
  }

  onUpdate() {
    this.submitted = true;
    if (this.updateAuthorForm.valid) {
      this.updateAnAuthor();
      alert('Updated!');
      window.location.reload();
    }
  }
}
