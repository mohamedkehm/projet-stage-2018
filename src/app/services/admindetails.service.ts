import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Response } from '@angular/http';
import { Admin } from '../Admin';
@Injectable({
  providedIn: 'root'
})
export class AdmindetailsService {

  constructor(private http:Http) {
    console.log("Admin Details")
   }
   admins:Admin[];
   getUserDetails(){
     return this.http.get("http://localhost/myapi/adminDetails.php").map(res=>res.json());
  
       
  }
}
