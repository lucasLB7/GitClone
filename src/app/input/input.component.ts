import { Component, OnInit } from '@angular/core';

import { GitServiceService } from '../git-serv.service'
import { user } from '../users'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [GitServiceService]
})
export class InputComponent implements OnInit {

  userName: string;

  constructor(private GitService:GitServiceService) {
  }

  ngOnInit() {
  }

  SearchUser (){
    this.GitService.getUser(this.userName);
    this.user = user;
    this.GitService.getRepos(this.userName)

  }

}
