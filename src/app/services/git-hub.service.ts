import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";//LLamadas a servicios rest
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";

const _getUsersUrl ='https://api.github.com/users';
//const _getUsersUrl ='http://10.11.1.100:8080/users';

@Injectable()
export class GitHubService{
    
    constructor(private _httpClient: HttpClient){

    }
    getUserInfo(userName: string){
        return this._httpClient//retorna el observable
        .get(`${_getUsersUrl}/${userName}`, {responseType: 'json'})//para el json siempre van en llaves
        .map((x:any) =>{
            let gitHubObj = new GitHubModel();
            gitHubObj.avatar_url=x.avatar_url;
            gitHubObj.login=x.login;
            gitHubObj.name=x.name;
            gitHubObj.followers=x.followers;
            gitHubObj.following=x.following;
            return gitHubObj;
        })
        .catch(this.handleError)//es un try chatch
    } 
    handleError(error: any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server Error');
        //lo de arriba es igual al de abajo
        //return Observable.throw(error.json() !=null ? error.json : 'Server Error');//throw es la excepcion de tipo observable
    }
}