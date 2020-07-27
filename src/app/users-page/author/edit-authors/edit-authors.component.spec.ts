import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAuthorsComponent } from './edit-authors.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Author } from 'src/app/models/author';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthorService } from '../../../services/author.service';
import { singleAuthorMock } from 'src/app/utils/mockdata';

class MockService {
  updateAnAuthor(): Observable<Author> {
    return {} as Observable<Author>;
  }

  getAllAuthors(): Observable<Author[]> {
    return {} as Observable<Author[]>;
  }
}

describe('EditAuthorsComponent', () => {
  let component: EditAuthorsComponent;
  let fixture: ComponentFixture<EditAuthorsComponent>;
  let spy: any;
  let mockAuthorService;

  beforeEach(async(() => {
    mockAuthorService = {
      getAuthor: () => { },
      updateAuthor: () => { }
    };

    TestBed.configureTestingModule({
      declarations: [EditAuthorsComponent],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          AuthorService,
          useValue: mockAuthorService,
        },
      ],
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

  it('should call ngOnInit', () => {
    spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    component.updateAuthorForm.controls.first_name.setValue('Daniel');
    expect(spy).toHaveBeenCalled();
  });
});
