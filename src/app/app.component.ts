import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GetData} from './login/login.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  next:any
  title = 'AngularV3';
  public usernameInput :any;
  public passwordInput :any;
  ChangeTopBar(){
    this.usernameInput = GetData.getData('username');
    this.passwordInput = GetData.getData('password');    
  }
}
