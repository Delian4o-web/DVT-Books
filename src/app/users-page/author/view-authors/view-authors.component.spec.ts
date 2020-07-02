import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAuthorsComponent } from './view-authors.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorService } from 'src/app/services/author.service';

describe('ViewAuthorsComponent', () => {
  let component: ViewAuthorsComponent;
  let fixture: ComponentFixture<ViewAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAuthorsComponent],
      providers: [AuthorService],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
