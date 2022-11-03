import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logoutUser() {
    localStorage.removeItem('userToken');
  }

  loginUser(username: string, password: string) {
    console.log(username, password)
    if (username == 'admin' && password == 'admin') {
      localStorage.setItem('userToken', 'testtoken123')
    }
  }

  isAuthenticated() {
    const token = localStorage.getItem('userToken')

    return token == 'testtoken123' ? true : false;
  }
}
