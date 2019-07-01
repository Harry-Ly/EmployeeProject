import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerFirstName = '';
  registerLastName = '';
  registerEmail = '';
  registerPassword = '';
  @Output() registerEmployee = new EventEmitter();

  onRegisterClick(form: NgForm) {
    if (form.invalid) {
      return 'Invalid';
    }

    alert(form.value.firstName);
    alert(form.value.lastName);
    alert(form.value.email);
    alert(form.value.password);
    this.registerEmployee.emit();
  }
}
