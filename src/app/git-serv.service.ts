import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment} from '../environments/environment';

import { user } from './users'
import { Repository } from './repository'


@Injectable()
export class GitServiceService {
  apikey: string = environment.myApiKey;
  link:string="https://api.github.com/users/"
  myUser:any;
  repos:any;

  constructor(private _http:HttpClient) {
}


getUser(user){
  interface UserInterface{
    login:string;
  }
  let promise = new Promise((resolve, reject) => {
    this._http.get<UserInterface>(this.link+user+this.apikey).toPromise().then(
      response =>{
      this.myUser=response.login
      console.log(response)
      resolve()})}
)
  return promise;
}

getRepos(user){
  interface RepoInterface{
    login:string;
  }
  let promise = new Promise((resolve, reject) => {
    this._http.get<RepoInterface>(this.link+user+"/repos"+this.apikey).toPromise().then(
      response =>{
      this.repos=response;
      console.log(response)
      resolve()})}
)
  return promise;
}

}
