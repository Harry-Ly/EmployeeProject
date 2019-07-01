import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatExpansionModule,
  MatSelectModule,
  MatSortModule
} from '@angular/material';
import { AppComponent } from './app.component';


// Creates self made angular modules and imports them (Don't forget to declare them too!)
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/login.service';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeesService } from './employee/employees.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatSortModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
