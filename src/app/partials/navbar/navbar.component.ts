import { Component, OnInit, OnDestroy, Input } from '@angular/core';
// import { AuthService } from 'stub';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Account } from 'common';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    private account;
    private subscriptions: Subscription[] = [];

    constructor(private authService: AuthService) { }

    public get name(): string {
        if (!this.authenticated) {
            return '';
        }
        return this.account.username;
    }

    public get authenticated(): boolean {
        return this.account !== undefined;
    }

    public ngOnInit(): void {
        this.authService.profile.subscribe( value => {
            if(Object.keys(value).length == 0){
                this.account = undefined;     
            }else{
                this.account = value
            }
               
        });
        
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

}
