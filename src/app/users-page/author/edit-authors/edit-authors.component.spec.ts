import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthorsComponent } from './edit-authors.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('EditAuthorsComponent', () => {
  let component: EditAuthorsComponent;
  let fixture: ComponentFixture<EditAuthorsComponent>;
  let de: DebugElement;
  let selectEl: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditAuthorsComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAuthorsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    de = fixture.debugElement.query(By.css('form'));
    selectEl = fixture.debugElement.query(By.css('select'));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuthorsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  // it('form valid when input is entered', () => {
  //   const firstNameInput = component.registerUpdateFormControl.first_name;
  //   firstNameInput.setValue('Delyan');

  //   const lastNameInput = component.registerUpdateFormControl.last_name;
  //   lastNameInput.setValue('Georgiev');

  //   expect(component.registerUpdateFormControl.valid).toBeTruthy();
  // });

  // it('should test input errors', () => {
  //   const firstNameInput = component.registerUpdateFormControl.first_name;
  //   expect(firstNameInput.errors.required).toBeTruthy();

  //   firstNameInput.setValue('Delyan');
  //   expect(firstNameInput.errors).toBeNull();
  // });
});
