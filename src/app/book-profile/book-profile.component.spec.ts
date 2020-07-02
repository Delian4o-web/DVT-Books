import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BookProfileComponent } from './book-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from '../services/book.service';
import { of } from 'rxjs';
import { singleBookMock } from '../utils/mockdata';

describe('BookProfileComponent', () => {
  let component: BookProfileComponent;
  let fixture: ComponentFixture<BookProfileComponent>;
  let httpTestingController: HttpTestingController;
  let mockBookService;

  beforeEach(async(() => {
    mockBookService = {
      getBook: () => { },
      getBookPicture: () => { }
    };

    TestBed.configureTestingModule({
      declarations: [BookProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: BookService, useValue: mockBookService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookProfileComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookProfileComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
  });

  it('should get a book', fakeAsync(() => {
    const spy = spyOn(mockBookService, 'getBook').and.returnValue(
      of(singleBookMock)
    );
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.bookInfo).toEqual(singleBookMock);
    expect(spy.calls.any()).toEqual(true);
  }));
});
