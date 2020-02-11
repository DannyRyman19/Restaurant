import { Component, OnInit } from "@angular/core";
import { logging } from 'protractor';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  registerMode=false;
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in succesfully');
    }, error => {
      console.log('Failed to login');
    }); 
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }


  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode:boolean) {
    this.registerMode = registerMode;
  }
}


