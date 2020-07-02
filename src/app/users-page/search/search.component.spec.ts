import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { BookService } from 'src/app/services/book.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Book } from 'src/app/models/book';
import { of } from 'rxjs';
import { booksMock, singleBookMock } from 'src/app/utils/mockdata';
import { DebugElement } from '@angular/core';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
