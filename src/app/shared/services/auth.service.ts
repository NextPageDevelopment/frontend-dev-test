import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  loginUrl: any = 'https://dev-test-service.madebywiser.com/login';

  authenticationUrl: any = 'https://dev-test-service.madebywiser.com/me';
  public profile: BehaviorSubject < object > = new BehaviorSubject < object > ({});
  constructor(private http: HttpClient) {}

  login(user) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(user.username + ':' + user.password));
    return this.http.get(this.loginUrl, {headers}).map(result => result);
  }

  me() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', token);
    return this.http.get(this.authenticationUrl, {headers})
      .map(result => result);
  }

  getProfile() {
    return this.me().subscribe(
      (data) => {
        this.profile.next(data);
      }
    );
  }
  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return true;
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
}
