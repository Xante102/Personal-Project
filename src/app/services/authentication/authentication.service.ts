import { loginData } from './../../model/loginData';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new loginData('janedoe@gmail.com', 'test123');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(LoginData: loginData): boolean {
    if(this.checkCredentials(LoginData)){
      this.isAuthenticated = true;
      this.router.navigate(['dashboard'])
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(LoginData: loginData): boolean{
    return this.checkEmail(LoginData.getEmail()) && this.checkPassword(LoginData.getPassword())
  }

  private checkEmail(email: string): boolean {
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
