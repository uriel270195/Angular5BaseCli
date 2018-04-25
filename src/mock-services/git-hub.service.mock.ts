import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";//LLamadas a servicios rest
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../app/model/git-hub-model";

const _getUsersUrl ='https://api.github.com/users';
//const _getUsersUrl ='http://10.11.1.100:8080/users';

@Injectable()
export class GitHubServiceMock{
    
    constructor(private _httpClient: HttpClient){

    }
    getUserInfo(userName: string){
        let gitHubObj = new GitHubModel();
            gitHubObj.avatar_url='';
            gitHubObj.login=userName;
            gitHubObj.name='';
            gitHubObj.followers=0;
            gitHubObj.following=0;
         //   let gitHubObjArr = new Array<GitHubModel>();
           // gitHubObjArr.push(gitHubObj);
       // return Observable.from(gitHubObjArr).catch(this.handleError);
       //igual
        return Observable.of(gitHubObj).catch(this.handleError);
    }

    handleError(error: any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server Error');
        //lo de arriba es igual al de abajo
        //return Observable.throw(error.json() !=null ? error.json : 'Server Error');//throw es la excepcion de tipo observable
    }
}