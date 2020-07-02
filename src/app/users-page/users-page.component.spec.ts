import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersPageComponent } from './users-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';

describe('UsersPageComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;
  let mockAuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersPageComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ AuthService, useValue: mockAuthService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
