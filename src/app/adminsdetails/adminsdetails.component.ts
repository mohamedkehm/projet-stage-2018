import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AdmindetailsService } from "../services/admindetails.service";
import { Admin } from '../Admin';
@Component({
  selector: 'app-adminsdetails',
  templateUrl: './adminsdetails.component.html',
  styleUrls: ['./adminsdetails.component.css']
})
export class AdminsdetailsComponent implements OnInit {

  constructor(private admindetailsService:AdmindetailsService) { }
  admins:Admin[];
  ngOnInit() {
    this.admindetailsService.getUserDetails().subscribe(users=>{this.admins=users;
    });
  }

  
  onClick() {
   
  this.admindetailsService.getUserDetails().subscribe(users=>{this.admins=users;
  });
    
    
  }
  

}
