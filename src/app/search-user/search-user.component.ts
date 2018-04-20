
import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";
import { GitHubService } from "../services/git-hub.service";

@Component({
    selector: 'app-search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit, OnDestroy {
    @Output() onSearchUser = new EventEmitter<string>();
    //nombre de ngModel
    userName: string;
    constructor(private _gitHubService: GitHubService){

    }
    ngOnInit() {
    }

    onSearchClick(){
        this._gitHubService.getUserInfo(this.userName).subscribe(value =>{
            //console.log(`Usuario: ${value.name}`);
            this.onSearchUser.emit(this.userName);
          });

        //console.log("Click: "+ this.userName);
    }
    ngOnDestroy() {
    }
}