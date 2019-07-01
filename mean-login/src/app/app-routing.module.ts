import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employeeadd', component: EmployeeAddComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'employeeedit:addFirstName', component: EmployeeAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
