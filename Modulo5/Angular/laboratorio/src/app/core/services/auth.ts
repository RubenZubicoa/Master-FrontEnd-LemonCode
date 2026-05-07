import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly TOKEN_KEY = signal<string | null>(null);

  public isAuthenticated = computed(() => this.TOKEN_KEY() !== null);

  public login(): void {
    this.TOKEN_KEY.set("test");
  }

  public logout(): void {
    this.TOKEN_KEY.set(null);
  }
}
