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

  onSubmit() {
    this.authservice.login(this.loginForm.value).subscribe(
      (result) => {
        this.authservice.setToken(result['_body']);
        this.router.navigate(['secure']); 
      },
      (err) => {
          console.log(err);
      }
    );
  }
}
