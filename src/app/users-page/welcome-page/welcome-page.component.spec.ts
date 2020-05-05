import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';

import { WelcomePageComponent } from './welcome-page.component';
import { AuthService } from 'src/app/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;
  let testBedService: AuthService;
  let componentService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [WelcomePageComponent],
      providers: [AuthService],
    });

    TestBed.overrideComponent(WelcomePageComponent, {
      set: { providers: [{ provide: AuthService }] },
    });

    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedService = TestBed.inject(AuthService);
    componentService = fixture.debugElement.injector.get(AuthService);
  });

  it('Service injected via inject() and Testbed.get() should be the same instance', inject(
    [AuthService],
    (injectService: AuthService) => {
      expect(injectService).toBe(testBedService);
    }
  ));
});
