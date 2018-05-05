import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from 'rxjs';
import { registroService } from "../services/registro.service";

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

    constructor(public _registro: registroService){}
    ngOnDestroy(){
    }
    ngOnInit(){
    }
    acceder(){
        this._registro.validarNombre(this.nombre) ? 
        ( this._registro.validarUser(this.user) ? 
        ( this._registro.validarPassword(this.pass) ? 
        ( this._registro.validarConfirmacionPassword(this.pass , this.confpass) ?
        ( this._registro.validarCorreo(this.correo) ? 
        ( this._registro.validarTerminos(this.terminos_codiciones) ? alert("Ok") : alert("Error Terminos y Condiciones"))   
        : alert("Error correo"))  
        : alert("Error Confirmacion password")) 
        : alert("Error Password")) 
        : alert("Error Usuario"))
        : alert("Error Nombre");
    }
    
}
//guard elemento
//95