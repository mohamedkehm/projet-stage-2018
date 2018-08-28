import { Component, OnInit } from '@angular/core';
import {article} from '../article';
import { LoginService } from "../services/login.service";
import {Admin} from '../Admin';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 nom;
art: article ={
  id:null,
  name: null,
  prix:null

};
admin: Admin ={
  id:null,
  firstName: null,
  lastName:null,
  birthdate:null,
  email:null,
  username:null,
  password:null,

};

constructor(private loginService:LoginService) { 
   
  


};

  ngOnInit() {
  }
  onClickMe() {
    this.art.name = this.nom;
    this.loginService.adduser('aziz','sdfg','sfgre');
  }

}
