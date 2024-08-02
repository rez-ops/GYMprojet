import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-sign-up',
  templateUrl: './sign-in-sign-up.component.html',
  styleUrls: ['./sign-in-sign-up.component.css']
})
export class SignInSignUpComponent implements OnInit {

  signInForm!: FormGroup;
  signUpForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      signInEmail: ['', [Validators.required, Validators.email]],
      signInPassword: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.signUpForm = this.formBuilder.group({
      signUpName: ['', [Validators.required, Validators.minLength(2)]],
      signUpUsername: ['', [Validators.required, Validators.minLength(3)]],
      signUpEmail: ['', [Validators.required, Validators.email]],
      signUpPassword: ['', [Validators.required, Validators.minLength(8)]],
      signUpRepeatPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSignIn() {
    if (this.signInForm.valid) {
      console.log('Sign In Email:', this.signInForm.value.signInEmail);
      console.log('Sign In Password:', this.signInForm.value.signInPassword);
      // Call the backend for sign-in
    }
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      console.log('Sign Up Name:', this.signUpForm.value.signUpName);
      console.log('Sign Up Username:', this.signUpForm.value.signUpUsername);
      console.log('Sign Up Email:', this.signUpForm.value.signUpEmail);
      console.log('Sign Up Password:', this.signUpForm.value.signUpPassword);
      console.log('Sign Up Repeat Password:', this.signUpForm.value.signUpRepeatPassword);
      // Call the backend for sign-up
    }
  }
}
