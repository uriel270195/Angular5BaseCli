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
    constructor(public _log: loginService, public _router: Router){}
    ngOnDestroy(){
    }
    ngOnInit(){
    }
    acceder(){
        if(this.user==null || this.user==''){
            alert('Ingresa Usuario');
        }else if(this.pass==null || this.pass==''){
            alert('Ingresa Contraseña');
        }else{
            this._log.login(this.user,this.pass) ? this._router.navigate(['']) : alert('Usuario o contraseña incorrecta');
        }
    }
}
//guard elemento