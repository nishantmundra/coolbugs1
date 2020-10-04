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
