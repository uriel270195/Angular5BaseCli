import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";
import { GitHubService } from "../services/git-hub.service";

//declarar componente
@Component({
    //la etiqueta del html
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css'],
})
export class GitHubCardComponent implements OnInit, OnDestroy {
    //gitHubData: GitHubModel;//se define el tipo de la clase
    @Input('gitHub-data') gitHubData: GitHubModel;//Genera un atributo
    constructor(){
    //this.gitHubData.avatar_url = 'https://cdn3.iconfinder.com/data/icons/gray-toolbar-3/512/user-512.png';
    }
    ngOnInit(){
        
    }
    ngOnDestroy(){
        
    }
}