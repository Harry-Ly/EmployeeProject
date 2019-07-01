import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  private employees: Employee[] = [];
  private employeesUpdated = new Subject<Employee[]>();

  constructor(private http: HttpClient) {}

  getEmployees() {
    this.http.get<{message: string, employees: Employee[]}>('http://localhost:3000/api/employee')
    .subscribe((employeeData) => {
      this.employees = employeeData.employees;
      this.employeesUpdated.next([...this.employees]);
    });
  }

  getEmployeeUpdateListener() {
    return this.employeesUpdated.asObservable();
  }
  addEmployee(
    first: string,
    last: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    home: string,
    cell: string,
    email: string) {
      const employee: Employee = {
        first: first,
        last: last,
        address: address,
        city: city,
        state: state,
        zip: zip,
        home: home,
        cell: cell,
        email: email };
      this.http
        .post<{message: string}>('http://localhost:3000/api/employee', employee)
        .subscribe((responseData) => {
          console.log(responseData.message);
          this.employees.push(employee);
          this.employeesUpdated.next([...this.employees]);
        });
  }
}
