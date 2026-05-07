import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly TOKEN_KEY = signal<string | null>(null);
  private readonly router = inject(Router);
  private readonly USER = 'master@lemoncode.net';
  private readonly PASSWORD = '12345678';

  public isAuthenticated = computed(() => this.TOKEN_KEY() !== null);

  public login(username: string, password: string): void {
    if (username === this.USER && password === this.PASSWORD) {
      this.TOKEN_KEY.set("test");
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  public logout(): void {
    this.TOKEN_KEY.set(null);
    this.router.navigate(['/home']);
  }
}
