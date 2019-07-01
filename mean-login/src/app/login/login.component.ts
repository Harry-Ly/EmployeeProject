import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  enteredEmail = '';
  enteredPassword = '';
  @Output() loginAttempt = new EventEmitter();

  constructor(public loginService: LoginService, private router: Router) {}

  onLoginClick(form: NgForm) {

    if (form.invalid) {
      return 'Invalid';
    }
    console.log(form.value.email, form.value.password);
    this.router.navigate(['/employeelist']);
  }
}
