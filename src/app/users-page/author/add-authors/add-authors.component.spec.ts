import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAuthorsComponent } from './add-authors.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Author } from 'src/app/models/author';
import { AuthorService } from '../../../services/author.service';

class MockService {
  addAuthor() {}
}

describe('AddAuthorsComponent', () => {
  let authorComponent: AddAuthorsComponent;
  let fixture: ComponentFixture<AddAuthorsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAuthorsComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      providers: [
        {
          AuthorService,
          useValue: MockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAuthorsComponent);
    authorComponent = fixture.componentInstance;
    authorComponent.ngOnInit();

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthorsComponent);
    authorComponent = fixture.componentInstance;
    authorComponent.ngOnInit();
    fixture.detectChanges();
  });

  it('should make field required', () => {
    const firstNameInput =
      authorComponent.registerAuthorForm.controls.first_name;
    expect(firstNameInput.errors.required).toBeTruthy();

    firstNameInput.setValue('John');
    expect(firstNameInput.errors).toBeNull();
  });

  it('form should be invalid when empty', () => {
    authorComponent.registerAuthorForm.controls.first_name.setValue('');
    authorComponent.registerAuthorForm.controls.last_name.setValue('');
    expect(authorComponent.registerAuthorForm.valid).toBeFalsy();
  });

  it('form valid when input is entered', () => {
    const firstNameInput = authorComponent.registerFormControl.first_name;
    firstNameInput.setValue('Delyan');

    const lastNameInput = authorComponent.registerFormControl.last_name;
    lastNameInput.setValue('Georgiev');

    expect(authorComponent.registerAuthorForm.valid).toBeTruthy();
  });

  it('should test input errors', () => {
    const firstNameInput = authorComponent.registerFormControl.first_name;
    expect(firstNameInput.errors.required).toBeTruthy();

    firstNameInput.setValue('Delyan');
    expect(firstNameInput.errors).toBeNull();
  });
});
