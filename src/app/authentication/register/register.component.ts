import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'fName': new FormControl(null, Validators.required),
      'lName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, Validators.required),
      'cPassword' : new FormControl(null, Validators.required),

    });
  }

  get fName() { return this.registerForm.get('fName') }
  get lName() {return this.registerForm.get('lName')}
  get email() {return this.registerForm.get('email')}
  get password() { return this.registerForm.get('password') }
  get cPassword() { return this.registerForm.get('cPassword') }

  
  submit() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }


}
