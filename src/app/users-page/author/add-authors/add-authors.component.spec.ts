import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAuthorsComponent } from './add-authors.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('AddAuthorsComponent', () => {
  let authorComponent: AddAuthorsComponent;
  let fixture: ComponentFixture<AddAuthorsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAuthorsComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
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
