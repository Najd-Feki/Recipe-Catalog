import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(public auth: AuthService, public router: Router) { }
email = new FormControl('')
password = new FormControl('')
  onLogin(data) {
  this.auth.loginUser(this.email.value, this.password.value);
    data.reset();
 }
}
