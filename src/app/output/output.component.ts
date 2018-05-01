import { Component, OnInit,Input } from '@angular/core';
import { GitServiceService } from '../git-serv.service'
import {Repository} from "../repository"

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
  providers: [GitServiceService]
})
export class OutputComponent implements OnInit {
  userName:string;
  gitservice:GitServiceService;
  // console.log(this.gitservice.myUser);
  constructor(private GitService:GitServiceService){}


  SearchUser (){
    this.GitService.getRepos(this.userName)

  }

  ngOnInit(){}
    }
