import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimation } from '../animations';
@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css'],
  animations: [ slideInDownAnimation ]
})
export class LoginErrorComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  details: string;
  message: string;
  sending = false;

  constructor(private router: Router) {}


  ngOnInit() {
  }
  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null }}]);
  }

}
