import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration Succesful');
    }, error => {
      console.log(error);
    });
  }

  goBack() {
    this.cancelRegister.emit(false);
  }
}
