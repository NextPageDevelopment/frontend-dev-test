import {
  Injectable
} from '@angular/core';
import {
  tap
} from 'rxjs/operators';
import {
  Http,
  Headers,
  URLSearchParams,
  RequestOptions
} from '@angular/http';
import {
  BehaviorSubject
} from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthService {

  loginUrl: any = 'https://dev-test-service.madebywiser.com/login';
  private headers = new Headers();
  private options: RequestOptions = new RequestOptions({
    headers: this.headers
  });
  authenticationUrl: any = 'https://dev-test-service.madebywiser.com/me';
  public profile: BehaviorSubject < object > = new BehaviorSubject < object > ({});
  constructor(private http: Http) {}

  login(user) {
    this.headers.append('authorization', 'Basic ' + btoa(user.username + ':' + user.password));
    return this.http.get(this.loginUrl, this.options).pipe(
      tap(
        data => data,
        error => error
      )
    );
  }

  me() {
    const token = localStorage.getItem('token');
    this.headers.append('authorization', token);
    return this.http.get(this.authenticationUrl, this.options)
      .map(result => JSON.parse(result['_body']))
  }

  getProfile() {
    return this.me().subscribe(
      (data) => {
        this.profile.next(data)
      }
    )
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
