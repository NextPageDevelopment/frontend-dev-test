import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { of } from 'rxjs/observable/of';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [
         HttpClientModule, HttpClientTestingModule
      ]
    });
  });

  it('should return access token', inject([AuthService], (service: AuthService) => {
    const user = {
      username: 'wiserdev',
      password: 'password'
    };
    service.login(user).subscribe((token) => {},
    (err) => {
      service.setToken(err.error.text);
      expect(err.error.text).toBeDefined();
    });
  }));

  it('should return logged username', inject([AuthService], (service: AuthService) => {
    service.me().subscribe((user) => {
      expect(user).toBeDefined();
    });
  }));

  it('should get user Profile', inject([AuthService], (service: AuthService) => {
    expect(service.getProfile()).toBeTruthy();
  }));

  it('user should not be authenticated', inject([AuthService], (service: AuthService) => {
    service.deleteToken();
    expect(service.isAuthenticated()).toBeFalsy();
  }));

  it('user should  be authenticated', inject([AuthService], (service: AuthService) => {
    service.setToken('hfghdd');
    expect(service.isAuthenticated()).toBeTruthy();
  }));

  it('should get token', inject([AuthService], (service: AuthService) => {
    service.setToken('xyxxxx');
    const token = service.getToken();
    expect(token).toBeDefined();
  }));

  it('should delete token', inject([AuthService], (service: AuthService) => {
    service.setToken('xyxxxx');
    const token = service.deleteToken();
    expect(token).toBeUndefined();
  }));

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
