import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserDetails } from '../UserDetails';
import { LoginService } from '../login.service';
import { UserFullDetails } from '../UserFullDetails';


import { AlertService, AuthenticationService } from '../_services';
import { ComponentPortal } from 'ngx-toastr';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
}
)

export class LoginComponent implements OnInit {
    userF: UserFullDetails = new UserFullDetails();
    user: UserDetails = new UserDetails();
    private router: Router;
    constructor(private loginService: LoginService){

    }

    ngOnInit() {
        console.log("Login Component Working");
    }
    save() {
        console.log("Inside Save Function");
        this.loginService.createUser(this.user)
            .subscribe(response => {
                this.user=response;
                console.log("Save Method Called");
                console.log(this.user);
            })
    }
    onClick() {
        console.log("Login Details have been submitted");
        console.log(this.user.pass);
        this.save();
    }
}
/*@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}*/


