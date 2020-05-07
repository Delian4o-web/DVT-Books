import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorProfileComponent } from './author-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthorService } from 'src/app/services/author.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../models/author';

class MockService {
  getAuthor(): Observable<Author> {
    return {} as Observable<Author>;
  }
}

class MockAuth {}

class MockActivatedRoute {}

describe('AuthorProfileComponent', () => {
  let component: AuthorProfileComponent;
  let fixture: ComponentFixture<AuthorProfileComponent>;
  let service: MockService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    service = new MockService();

    TestBed.configureTestingModule({
      declarations: [AuthorProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          AuthService,
          useValue: MockAuth,
        },
        {
          AuthorService,
          useValue: MockService,
        },
        {
          provide: ActivatedRoute,
          useValue: MockActivatedRoute,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create the app', () => {
  //   expect(component).toBeTruthy();
  //   component.backClicked = () => {};
  // });
});
