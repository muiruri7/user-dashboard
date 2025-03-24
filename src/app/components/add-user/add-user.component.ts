import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  userForm: FormGroup;
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['']
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.userService.addUser(newUser);
      console.log('User Data:', this.userForm.value);
      this.successMessage = 'User added successfully!';
      this.userForm.reset();
      // this.router.navigate(['/']); 
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}