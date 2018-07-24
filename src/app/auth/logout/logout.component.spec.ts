import { async, ComponentFixture, TestBed , inject} from '@angular/core/testing';
import { AuthService } from '../../shared/services/auth.service';
import { LogoutComponent } from './logout.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
          AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should call function', inject([AuthService], (service: AuthService) => {
  //   component.ngOnInit();
  //   expect(service.deleteToken()).toHaveBeenCalled();
  //   })
  // );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
