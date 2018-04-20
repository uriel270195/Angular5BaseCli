import { Injectable } from "@angular/core";

@Injectable()
export class loginService{
    constructor(){}
    login(name: string, pass: string){
        if(name==='uriel27' && pass==='123'){
            return true;
        }else{
            return false;
        }

    }
}