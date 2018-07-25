import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpStatusModule } from 'http-status-pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth.guard.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { SecureComponent } from './pages/secure/secure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginErrorComponent } from './login-error/login-error.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
      path: 'auth',
      loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
      path: 'secure',
      component: SecureComponent,
      canActivate: [AuthGuardService],
    },
    {
        path: 'error/:status_code',
        component: ErrorComponent
    },
    {
        path: 'login-error',
        component: LoginErrorComponent,
        outlet: 'popup'
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        NavbarComponent,
        SecureComponent,
        LoginErrorComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        HttpStatusModule,
        BrowserAnimationsModule
    ],
    providers: [
        AuthService, AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
