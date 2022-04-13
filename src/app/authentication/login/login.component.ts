import { loginData } from './../../model/loginData';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isFormInvalid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) {}

  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }

    this.checkCredentials(loginForm);
  }

  private checkCredentials(loginForm: NgForm) {
    console.log(loginForm.value)
    const LoginData = new loginData(
      loginForm.value.email,
      loginForm.value.password
    );
    if (!this.authenticationService.authenticate(LoginData)) {
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
