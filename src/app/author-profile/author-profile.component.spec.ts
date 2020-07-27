import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorProfileComponent } from './author-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from '../models/author';
import { singleAuthorMock } from '../utils/mockdata';
import { of } from 'rxjs';

describe('AuthorProfileComponent', () => {
  let component: AuthorProfileComponent;
  let fixture: ComponentFixture<AuthorProfileComponent>;
  let httpTestingController: HttpTestingController;
  let mockAuthorService;

  beforeEach(async(() => {
    mockAuthorService = {
      getAuthor: () => { }
    };

    TestBed.configureTestingModule({
      declarations: [AuthorProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: AuthorService, useValue: mockAuthorService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorProfileComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfileComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
  });

  it('should get an author', () => {
    const spy = spyOn(mockAuthorService, 'getAuthor').and.returnValue(
      of(singleAuthorMock)
    );
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.authorInfo).toEqual(singleAuthorMock);
    expect(spy.calls.any()).toEqual(true);
  });




});
