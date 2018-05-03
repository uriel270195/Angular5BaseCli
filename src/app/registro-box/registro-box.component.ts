import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs';

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

    constructor(){}
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
        ( this.validarTerminos(this.terminos_codiciones) ? alert("Ok") : alert("Error Terminos y Condiciones"))   
        : alert("Error correo"))  
        : alert("Error Confirmacion password")) 
        : alert("Error Password")) 
        : alert("Error Usuario"))
        : alert("Error Nombre");
            //this._log.login(this.user,this.pass) ? alert("Ok") : alert('Error');
    }
    validarNombre(nom: string){
        var nombre=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        if(nombre.test(nom) && nom!=null){
            return true
        }
        return false;
    }
    validarUser(us: string){
        var usuario=/^[a-z0-9_\\_\ü]+$/;
        if(usuario.test(us) && us!=null){
            return true
        }
        return false;
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
        return term;
    }
}
//guard elemento
//95