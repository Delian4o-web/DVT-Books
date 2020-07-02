import { async, ComponentFixture, TestBed, flush } from '@angular/core/testing';
import { AddAuthorsComponent } from './add-authors.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { Author } from 'src/app/models/author';
import { AuthorService } from '../../../services/author.service';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { authorsMock, singleAuthorMock } from 'src/app/utils/mockdata';
import { Book } from 'src/app/models/book';

class MockService {
  addAuthor(): Observable<Author[]> {
    return {} as Observable<Author[]>;
  }

  getAllAuthors(): Observable<Author[]> {
    return {} as Observable<Author[]>;
  }
}

describe('AddAuthorsComponent', () => {
  let authorComponent: AddAuthorsComponent;
  let fixture: ComponentFixture<AddAuthorsComponent>;
  let mockAuthorService;
  let blob = new Blob([""], { type: 'text/html' });
  blob["lastModifiedDate"] = "";
  blob["name"] = "filename";

  let fakeF = <File>blob;

  const mockAuthor = [{
    href: '324iuhjk',
    id: 'fefer34',
    first_name: 'John',
    middle_names: 'Johnson',
    last_name: 'Johnson',
    name: 'John Johnson',
    about: 'About the author',
    version: '5E098NGH876',
    books: [{
      isbn10: '3454657657',
      isbn13: '46456546',
      title: 'Title',
      about: 'Mock About',
      abstract: 'Mock Abstract',
      author: { href: 'string', id: 'string', name: 'string' },
      publisher: 'Mock Publisher',
      date_published: new Date(),
      image: fakeF,
      tags: [{
        href: 'efe4545',
        id: 'ty689',
        description: 'Mock Description',
      }]
    }]
  }];

  beforeEach(async(() => {
    mockAuthorService = {
      addAuthor: () => { },
      getAllAuthors: () => { }
    };

    TestBed.configureTestingModule({
      declarations: [AddAuthorsComponent],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          AuthorService,
          useValue: MockService, mockAuthorService,
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAuthorsComponent);
    authorComponent = fixture.componentInstance;
    authorComponent.ngOnInit();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthorsComponent);
    authorComponent = fixture.componentInstance;
    authorComponent.ngOnInit();
    fixture.detectChanges();
  });

  it('should make fields required', () => {
    const firstNameInput = authorComponent.form.controls.first_name;
    const lastNameInput = authorComponent.form.controls.last_name;
    expect(firstNameInput.errors.required).toBeTruthy();
    expect(lastNameInput.errors.required).toBeTruthy();

    firstNameInput.setValue('John');
    lastNameInput.setValue('Doe');
    expect(firstNameInput.errors).toBeNull();
    expect(lastNameInput.errors).toBeNull();
  });

  it('form should be invalid when empty', () => {
    authorComponent.form.controls.first_name.setValue('');
    authorComponent.form.controls.last_name.setValue('');
    expect(authorComponent.form.valid).toBeFalsy();
  });

  it('should be valid when all required fields are provided', () => {
    const firstNameInput = authorComponent.registerFormControl.first_name;
    firstNameInput.setValue('Delyan');

    const lastNameInput = authorComponent.registerFormControl.last_name;
    lastNameInput.setValue('Georgiev');

    expect(authorComponent.form.valid).toBeTruthy();
  });

  it('should add an author', () => {
    let author = new Author();
    authorComponent.form.controls.first_name.setValue('John');
    authorComponent.form.controls.last_name.setValue('Smith');
    author = authorComponent.form.value;

    const spy = spyOn(mockAuthorService, 'addAuthor').and.returnValue(
      of(author)
    );

    mockAuthorService.addAuthor();

    const spyAuthor = spyOn(authorComponent, 'addAuthor').and.callThrough();

    authorComponent.addAuthor();
    fixture.detectChanges();
    expect(author).toEqual(authorComponent.form.value);
    expect(spyAuthor).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the onSubmit method on form submission', () => {
    spyOn(authorComponent, 'onSubmit').and.callThrough();
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(authorComponent.onSubmit).toHaveBeenCalled();
  });


  it('should test if a form is invalid', () => {
    authorComponent.form.controls.about.setValue('about test');
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    expect(authorComponent.form.valid).toBeFalse();
    const spy = spyOn(authorComponent, 'addAuthor');
    expect(spy).not.toHaveBeenCalled();
  });
});

