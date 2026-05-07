import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '../../../core/services/auth';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private readonly authService = inject(Auth);

  public usernameFormControl = new FormControl('', [Validators.required]);
  public passwordFormControl = new FormControl('', [Validators.required]);

  public login(): void {
    if (this.usernameFormControl.invalid || this.passwordFormControl.invalid) {
      return;
    }
    const username = this.usernameFormControl.value;
    const password = this.passwordFormControl.value;
    this.authService.login(username as string, password as string);
  }
}
