import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit {
  addFirstName = '';
  addLastName = '';
  addAddress = '';
  addCity = '';
  addState = '';
  addZipCode = '';
  addHomePhone = '';
  addCellPhone = '';
  addEmail = '';

  constructor(public employeesService: EmployeesService, private router: Router, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe();
  }

  onAddClick(form: NgForm) {
    if (form.invalid) {
      return 'Invalid';
    }
    this.employeesService.addEmployee(
      form.value.firstName,
      form.value.lastName,
      form.value.address,
      form.value.city,
      form.value.state,
      form.value.zip,
      form.value.homePhone,
      form.value.cellPhone,
      form.value.email);

    this.router.navigate(['/employeelist']);
  }
}
