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
        this.validarNombre(this.nombre) ? 
            ( this.validarUser(this.user) ? 
                ( this.validarPassword(this.pass) ? 
                    ( this.validarConfirmacionPassword(this.pass , this.confpass) ?
                        ( this.validarCorreo(this.correo) ? 
                            ( this.validarTerminos(this.terminos_codiciones) ? alert("Ok") : alert("Error Yerminos y Condiciones"))   
                        : alert("Error correo"))  
                     : alert("Error Confirmacion password")) 
                : alert("Error Password")) 
            : alert("Error Usuario"))
        : alert("Error Nombre");
            //this._log.login(this.user,this.pass) ? alert("Ok") : alert('Error');
    }
    validarNombre(nom: string){
        let pos=1;
        for (let i = 0; i < nom.length; i++) {
            let valor=nom.substring(i,pos).charCodeAt(0);
            if(valor<65 || valor>90){
                if(valor<97 || valor>122){
                    if(valor!=32){
                        return false;
                    }
                }
            }
            pos++;
        }
        return true
    }
    validarUser(us: string){
        if(us.length <5 || us.length >15){
            return false
        }
        let pos=1;
        for (let i = 0; i < us.length; i++) {
            let valor=us.substring(i,pos).charCodeAt(0);
            if(valor<65 || valor>90){
                if(valor<97 || valor>122){
                    if(valor<48 || valor>57){
                        return false;
                    }
                }
            }
            pos++;
        }
        return true
    }
    validarPassword(pas: string){
        if(pas.length <2 ){
            return false
        }
        let pos=1,max=0,min=0,num=0;
        for (let i = 0; i < pas.length; i++) {
            let valor=pas.substring(i,pos).charCodeAt(0);
            if((valor>65 || valor<90) && max==0){
                max++;
            } else if((valor>97 || valor<122) && min==0){
                min++;
            }else if((valor>48 || valor<57) && num==0){
                num++
            }
            //console.log(`valor: ${valor} max: ${max} min: ${min} num: ${num}`);
            pos++;
        }
        if(max==1 && min==1 && num==1){
            return true
        }
        return false
    }
    validarConfirmacionPassword(pas: string, confpas: string){
        if(pas===confpas){
            return true;
        } 
        return false;
    }
    validarCorreo(mail: string){
        if(mail.indexOf(' ')!=-1){
            return false;
        }else if(mail.indexOf('@')>=1 && mail.indexOf('.')>mail.indexOf('@')+1){
            if(mail.length>mail.indexOf('.')+1){
                return true;
            }
            return false;
        }
    }
    validarTerminos(term: Boolean){
        console.log(term);
    }
}
//guard elemento