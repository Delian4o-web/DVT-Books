import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBooksComponent } from './edit-books.component';
import { AuthorService } from 'src/app/services/author.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditBooksComponent', () => {
  let component: EditBooksComponent;
  let fixture: ComponentFixture<EditBooksComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditBooksComponent],
      imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [{ provide: AuthorService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call ngOnInit', () => {
    spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    component.updateBookForm.controls.isbn10.setValue('2656549823');

    expect(spy).toHaveBeenCalled();
  });
});
