import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    credentials = {
        username: '',
        password: ''
    };

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
    }

    checkLogin() {
        this.userService.signIn(this.credentials)
            .subscribe((res: any) => {
                    if (res && res._id) {
                        this.router.navigate(['/app/home']);
                    }

                }, err => {
                    (console.log('Credentials invalid'));
                });
    }
}
