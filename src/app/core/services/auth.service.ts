import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '@environments/environment';
import { LoginRequest, LoginResponse, RegisterRequest, UserData, ApiResponse } from '@core/models/auth.model';
import { UserRole } from '@core/enums/app.enums';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http   = inject(HttpClient);
  private router = inject(Router);

  private readonly TOKEN_KEY      = 'kar_token';
  private readonly USER_KEY       = 'kar_user';
  private readonly EXPIRES_KEY    = 'kar_expires';

  private _currentUser = signal<UserData | null>(this.loadUser());
  readonly currentUser = this._currentUser.asReadonly();
  readonly isLoggedIn  = computed(() => !!this._currentUser());
  readonly userRole    = computed(() => this._currentUser()?.userType as UserRole | null);

  private expiryTimer?: ReturnType<typeof setInterval>;

  constructor() {
    this.startExpiryWatch();
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/Auth/login`, credentials)
      .pipe(tap(res => {
        if (res.status === 'success' && res.data) {
          this.persist(res.data);
          this._currentUser.set(res.data);
          this.startExpiryWatch();
        }
      }));
  }

  register(payload: RegisterRequest): Observable<ApiResponse<unknown>> {
    return this.http.post<ApiResponse<unknown>>(`${environment.apiUrl}/Auth/register`, payload);
  }

  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
    sessionStorage.removeItem(this.EXPIRES_KEY);
    this._currentUser.set(null);
    clearInterval(this.expiryTimer);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  redirectAfterLogin(): void {
    const role = this.userRole();
    switch (role) {
      case UserRole.Lawyer:  this.router.navigate(['/lawyer/dashboard']);  break;
      case UserRole.Student: this.router.navigate(['/student/dashboard']); break;
      case UserRole.Donor:   this.router.navigate(['/donor/dashboard']);   break;
      default:               this.router.navigate(['/client/dashboard']);  break;
    }
  }

  private persist(data: UserData): void {
    sessionStorage.setItem(this.TOKEN_KEY,   data.token);
    sessionStorage.setItem(this.USER_KEY,    JSON.stringify(data));
    sessionStorage.setItem(this.EXPIRES_KEY, data.expiresUtc);
  }

  private loadUser(): UserData | null {
    try {
      const raw = sessionStorage.getItem(this.USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  private startExpiryWatch(): void {
    clearInterval(this.expiryTimer);
    if (!this.isLoggedIn()) return;

    this.expiryTimer = setInterval(() => {
      const exp = sessionStorage.getItem(this.EXPIRES_KEY);
      if (!exp || new Date(exp).getTime() - Date.now() < 60_000) {
        this.logout();
      }
    }, 15_000);
  }
}
