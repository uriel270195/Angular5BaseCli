import { Component, OnInit, OnDestroy } from "@angular/core";
import { loginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'login-box',
    templateUrl: './login-box.component.html',
    styleUrls: ['./login-box.component.css']
})
export class loginBoxComponent implements OnInit, OnDestroy {
    position = 'before';
    user: string;
    hide = true;
    pass: string;
    constructor(private _log: loginService, private _router: Router){}
    ngOnDestroy(){
    }
    ngOnInit(){
    }
    acceder(){
        this._log.login(this.user,this.pass) ? this._router.navigate(['']) : console.log("Error");
    }
}