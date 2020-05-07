import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAuthorsComponent } from './edit-authors.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('EditAuthorsComponent', () => {
  let component: EditAuthorsComponent;
  let fixture: ComponentFixture<EditAuthorsComponent>;

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
