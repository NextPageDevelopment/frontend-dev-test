import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../shared/services/auth.service';
import { SecureComponent } from './secure.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
describe('SecureComponent', () => {
  let component: SecureComponent;
  let fixture: ComponentFixture<SecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureComponent ],
      imports: [HttpClientTestingModule],
      providers: [
          AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
