import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) { }
  usernameInput :any;
  passwordInput :any;
  
  loginButton(){
    if ((document.getElementById('username') as HTMLInputElement).value == "OliDo" && 
        (document.getElementById('password') as HTMLInputElement).value == "Heslo") {
      console.log("here")
      this.router.navigate(['home']);
      
    }
  }
}
export class GetData{
  static getData(data:string) {
    const newData = (document.getElementById(data) as HTMLInputElement).value;
    return newData
  } 
}
