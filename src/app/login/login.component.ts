import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  
  
  
  ngOnInit() {
  
    
  }



  loginUser(email, password): void {
      
  	let employeeDetails = [];

    this.loginService.getAllEmployees(email, password).subscribe((response) => (() => {


    	if (Object.keys(response).length > 0) {
    		
	    	employeeDetails["name"] = response[0]["name"];
	    	employeeDetails["designation"] = response[0]["designation"];
	    	employeeDetails["email"] = response[0]["email"];
	    	employeeDetails["password"] = response[0]["password"];

	    	console.log(employeeDetails);
		}

		else {

			console.log("Invalid login details");
		}

    })());
    
  }






  
}
