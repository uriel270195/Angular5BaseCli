import { Component, OnInit, OnDestroy } from "@angular/core";
import { loginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'login-box',
    templateUrl: './login-box.component.html',
    styleUrls: ['./login-box.component.css']
})
export class loginBoxComponent implements OnInit, OnDestroy {
    user: string;
    pass: string;
    constructor(private _log: loginService, private _router: Router){}
    ngOnDestroy(){
    }
    ngOnInit(){
    }
    acceder(){
        console.log(this._log.login(this.user,this.pass));
        if(this._log.login(this.user,this.pass)==true){
            this._router.navigate(['']);
        }
    }
}