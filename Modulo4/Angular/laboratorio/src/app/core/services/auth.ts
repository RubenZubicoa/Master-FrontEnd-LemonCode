import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly router = inject(Router);
  // private readonly localStorage = inject(localStorage);

  private readonly TOKEN_KEY = signal<string | null>(null);
  private readonly USER = 'master@lemoncode.net';
  private readonly PASSWORD = '12345678';
  private currentUser = signal<{username: string, password: string} | undefined>(undefined);

  public isLogged = computed(() => this.TOKEN_KEY() !== null);
  public username = computed(() => this.currentUser()?.username);

  constructor() {
    const currentUser = localStorage.getItem('currentUser');
    const token = localStorage.getItem('token');
    if (currentUser && token) {
      this.currentUser.set(JSON.parse(currentUser));
      this.TOKEN_KEY.set(token);
    }
  }

  public login(username: string, password: string): void {
    if (username === this.USER && password === this.PASSWORD) {
      this.TOKEN_KEY.set("test");
      this.router.navigate(['/dashboard']);
      this.currentUser.set({username, password});
      localStorage.setItem('currentUser', JSON.stringify({username, password}));
      localStorage.setItem('token', 'test');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  public logout(): void {
    this.TOKEN_KEY.set(null);
    this.router.navigate(['/home']);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser.set(undefined);
  }
}
