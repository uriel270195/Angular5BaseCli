import { Injectable } from "@angular/core";

@Injectable()
export class registroService{
    constructor(){}
    validarNombre(nom: string){
        var nombre=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        if(nombre.test(nom) && nom!=null){
            return true
        }
        return false;
    }
    validarUser(us: string){
        var usuario=/^[a-z0-9_-]{3,15}$/;
        if(usuario.test(us) && us!=null){
            return true
        }
        return false;
    }
    validarPassword(pas: string){
    var pwd=/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{3,}$/;
    if(pwd.test(pas) && pas!=null){
        return true
    }
    return false;
    }
    validarConfirmacionPassword(pas: string, confpas: string){
        if(pas===confpas){
            return true;
        } 
        return false;
    }
    validarCorreo(mail: string){
        var mailValidation=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        if(mailValidation.test(mail) && mail!=null){
            return true
        }
        return false;
    }
    validarTerminos(term: Boolean){
        console.log(term);
        return term;
    }
}