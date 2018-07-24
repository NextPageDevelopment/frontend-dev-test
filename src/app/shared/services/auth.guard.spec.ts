import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from '../../shared/services/auth.service';
import { AuthGuardService } from './auth.guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, AuthService],
      imports: [
         HttpClientModule, RouterTestingModule
      ]
    });
  });

  it('should return true', inject([AuthGuardService], (guard: AuthGuardService) => {
    expect(guard.canActivate()).toBeFalsy();
  }));

  it('should ...', inject([AuthGuardService], (guard: AuthGuardService) => {
    expect(guard).toBeTruthy();
  }));
});
