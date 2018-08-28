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
export class RegisterService {

  constructor(private http:Http) {
    console.log("Registration")
   }

   addAdmin(firstName:string,lastName:string,birthdate:string,email:string,username:string,password:string)
   {
   
     const  headers = new Headers();
     headers.append('Content-Type','application/X-www-form=urlencoded');
     headers.append('Content-Type', 'application/json');
   
     return this.http.post("http://localhost/myapi/Register.php",{"firstName":firstName,"lastName":lastName,"birthdate":birthdate,"email":email,"username":username,"password":password})
     .map((response:Response)=>response.json())
     .subscribe((data)=>{console.log("got smthg back",data);}
       ,(error)=>{console.log("Error!!!", error);}
        );
   }
   add(firstName:string,lastName:string)
   {
   
     const  headers = new Headers();
     headers.append('Content-Type','application/X-www-form=urlencoded');
     headers.append('Content-Type', 'application/json');
   
     return this.http.post("http://localhost:8000/album",'{"title":"'+firstName+'","number":"'+lastName+'"}')
     .map((response:Response)=>response.json())
     .subscribe((data)=>{console.log("got smthg back",data);}
       ,(error)=>{console.log("Error!!!", error);}
        );
   }
}
