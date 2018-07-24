import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../partials/navbar/navbar.component';
@Component({
  providers: [NavbarComponent],
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authservice: AuthService, public router: Router, private comp: NavbarComponent) { }

  ngOnInit() {
    this.authservice.deleteToken();
    this.comp.ngOnInit();
    this.router.navigate(['auth/login']);
  }

}
