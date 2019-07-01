import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit, OnDestroy {

  /* employee: Employee =
    {
      email: 'john@gmail.com',
    first: 'John' }; */

  // @Input() employees: Employee[] = [];

  selectedEmployee: Employee;
  employees: Employee[] = [];

  private employeesSub: Subscription;

  constructor(public employeesService: EmployeesService) {}

  ngOnInit() {
    this.employeesService.getEmployees();
    this.employeesSub = this.employeesService.getEmployeeUpdateListener()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }

  ngOnDestroy() {
    this.employeesSub.unsubscribe();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
}
