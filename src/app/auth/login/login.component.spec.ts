import { async, ComponentFixture, TestBed , inject} from '@angular/core/testing';
import { AuthService } from '../../shared/services/auth.service';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return token', () => {
    const user = {
      value: {
        username: 'wiserdev',
        password: 'password'
      }
    };
    expect(component.onSubmit(user)).toBeFalsy();
  });

  it('should set access token', inject([AuthService], (service: AuthService) => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
