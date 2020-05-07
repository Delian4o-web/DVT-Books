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
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditAuthorsComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAuthorsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuthorsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
});
