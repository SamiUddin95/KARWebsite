import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'kar-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="auth-card">
      <div class="auth-card-header">
        <h2 style="font-family:'Playfair Display',serif;font-size:1.75rem;color:#F5F5F5;margin-bottom:0.5rem">Reset Password</h2>
        <p style="font-size:0.875rem;color:#A5A5A5">Enter your email and we'll send a reset link.</p>
      </div>
      @if (!sent()) {
        <div style="display:flex;flex-direction:column;gap:1.25rem">
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" [formControl]="email" placeholder="you@example.com"/>
          </div>
          <button class="btn btn-primary btn-full" (click)="send()">Send Reset Link</button>
        </div>
      } @else {
        <div style="text-align:center;padding:2rem 0;color:#A5A5A5">
          <svg style="color:#C6A15B;margin:0 auto 1rem;display:block" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.18 2 2 0 013 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
          <p>Check your inbox. A password reset link has been sent to <strong style="color:#F5F5F5">{{ email.value }}</strong>.</p>
        </div>
      }
      <div style="margin-top:1.5rem;text-align:center">
        <a routerLink="/auth/login" style="font-size:0.875rem;color:#C6A15B">Back to Sign In</a>
      </div>
    </div>
  `,
  styles: [`
    .auth-card { background:#181818;border:1px solid #2A2A2A;border-radius:16px;padding:2rem;width:100%; }
    .auth-card-header { text-align:center;margin-bottom:1.5rem; }
  `]
})
export class ForgotPasswordComponent {
  email  = new FormControl('', [Validators.required, Validators.email]);
  sent   = signal(false);
  send() { if (this.email.valid) this.sent.set(true); }
}
