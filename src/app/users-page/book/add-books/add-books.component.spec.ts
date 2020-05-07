import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooksComponent } from './add-books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorService } from 'src/app/services/author.service';

describe('AddBooksComponent', () => {
  let component: AddBooksComponent;
  let fixture: ComponentFixture<AddBooksComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddBooksComponent],
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
    fixture = TestBed.createComponent(AddBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call ngOnInit', () => {
    spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    component.registerBookForm.controls.isbn10.setValue('26565498');

    expect(spy).toHaveBeenCalled();
  });
});
