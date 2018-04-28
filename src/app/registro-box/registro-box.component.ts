import { Component, OnInit, OnDestroy } from "@angular/core";
import { loginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'registro-box',
    templateUrl: './registro-box.component.html',
    styleUrls: ['./registro-box.component.css']
})
export class registroBoxComponent implements OnInit, OnDestroy {
    position = 'before';
    user: string;
    hide = true;
    pass: string;
    nombre: string;
    confpass: string;
    correo: string;
    terminos_codiciones: boolean;

    constructor(public _log: loginService, public _router: Router){}
    ngOnDestroy(){
    }
    ngOnInit(){
    }
    acceder(){
        this.validarNombre(this.nombre) ? alert("Ok") : alert("Error");
            //this._log.login(this.user,this.pass) ? alert("Ok") : alert('Error');
    }
    validarNombre(nom: string){
        let pos=1;
        for (let i = 0; i < nom.length; i++) {
            let valor=nom.substring(i,pos).charCodeAt(0);
            if(valor<=65 && valor>=90
            || valor<=97 && valor>=122
            || valor!=165){
                return false;
            }
            //65-90..........97-122
            pos++;
        }
        return true
    }
}
//guard elemento