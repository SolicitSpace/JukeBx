import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl :string =  "http://127.0.0.1:8081";
  // url :string =  "http://api.github.com/users/koushikkothagal";
  

  constructor(private http: HttpClient) { }

  

  getAllEmployees (email, password) {
  
    return this.http.get(this.apiUrl + "/getEmployees/" + email + "/" + password);
  }

  
}
