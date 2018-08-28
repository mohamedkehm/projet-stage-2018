import { Component, OnInit } from '@angular/core';

import { RegisterService } from "../services/register.service";
import {Admin} from '../Admin';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService) { };
  cpassword;
  visible: boolean = false;
admin: Admin ={
  id:null,
  firstName: null,
  lastName:null,
  birthdate:null,
  email:null,
  username:null,
  password:null,

};
  ngOnInit() {
  }

  onClick() {
    if (this.admin.password!=this.cpassword)
    {
      //console.log('password !!!');
      this.visible=true;

    }
    else {
      this.visible=false;
      this.registerService.add(this.admin.firstName,this.admin.lastName);
    }
    
  }
}
