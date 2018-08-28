import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:Http) {
    console.log("connected login")
   }
   login(index_signin,password_signin){
    var headers= new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');

    return this.http.post("http://localhost/api/login.php",{"index_signin":index_signin,"password_signin":password_signin});
}

adduser(user:string,email:string,password:string)
{

  const  headers = new Headers();
  headers.append('Content-Type','application/X-www-form=urlencoded');
  headers.append('Content-Type', 'application/json');
 
  return this.http.post("http://localhost/myapi/Register.php",{"user":user,"email":email,"password":password})
  .map((response:Response)=>response.json())
  .subscribe((data)=>{console.log("got smthg back",data);}
    ,(error)=>{console.log("Error!!!", error);}
     );
}
}