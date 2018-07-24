import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });
  }

  onSubmit(loginForm) {
    this.authservice.login(loginForm.value).subscribe(
      (result) => {
        this.authservice.setToken(result);
        this.router.navigate(['secure']);
      },
      (err) => {
          if (err.error.text) {
            this.authservice.setToken(err.error.text);
            this.router.navigate(['secure']);
          }
      }
    );
  }
}
