import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {}

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  getErrorMessage(field: string): string {
    switch (field) {
      case 'email':
        return this.email?.hasError('email')
          ? 'Please Enter a valid email ID'
          : 'Please Enter your email ID';
      case 'name':
        return this.name?.hasError('required') ? 'Please Enter Username' : '';
      case 'password':
        return this.password?.hasError('required')
          ? 'Please Enter Password'
          : '';
      default:
        return '';
    }
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      bio: [''],
    });
  }

  onSubmit() {
    const { value: userInfo, valid } = this.registrationForm;
    if (valid) {
      this.isLoading = true;
      this.profileService.registerUser(userInfo).subscribe((resp) => {
        this.isLoading = false;
        this.profileService.isUserRegistered = true;
        this.router.navigate(['/profile']);
      });
    }
  }
}
