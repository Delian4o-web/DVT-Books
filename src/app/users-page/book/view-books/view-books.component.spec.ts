import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewBooksComponent } from './view-books.component';
import { BookService } from 'src/app/services/book.service';
import { HttpClientModule } from '@angular/common/http';

describe('ViewBooksComponent', () => {
  let component: ViewBooksComponent;
  let fixture: ComponentFixture<ViewBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBooksComponent],
      providers: [BookService],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
