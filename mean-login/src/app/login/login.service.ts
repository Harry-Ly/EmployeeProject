import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginService {
  private loginInfo: Login[] = [];
  private loginUpdated = new Subject<Login[]>();

  constructor(private http: HttpClient) {}

  getLogin() {
    this.http.get<{message: string, loginInfo: Login[]}>('http://localhost:3000/api/login')
      .subscribe((loginData) => {
        this.loginInfo = loginData.loginInfo;
        this.loginUpdated.next([...this.loginInfo]);
      });
  }

  getLoginListener() {
    return this.loginUpdated.asObservable();
  }
}
