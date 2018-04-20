import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { GitHubModel } from '../model/git-hub-model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  //gitHubData: GitHubModel;
  gitHubDataList: Array<GitHubModel>;
  //el private _gt: GitHubService evita ser instanciado  con el new y se invoca el _gt.prueba();
  //pero necesita ser declarado en providers.ts en la carpeta service
  constructor(private _gitHubService: GitHubService) { 
    this.gitHubDataList = Array<GitHubModel>();
  }

  ngOnInit() {
  }
  onSearchUser(userName: string){
    this._gitHubService.getUserInfo(userName)
    .subscribe(value =>{
      //this.gitHubData = new GitHubModel();
      //this.gitHubData = value;
      this.gitHubDataList.push(value);
    });
  }
  deleteUser(list: GitHubModel){
    this.gitHubDataList=this.gitHubDataList.filter(x=>x!=list);
  }
}
