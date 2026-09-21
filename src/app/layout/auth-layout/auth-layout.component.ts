import { Component } from '@angular/core';
import { LegalIconComponent } from '../../shared/components/legal-icon/legal-icon.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'kar-auth-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LegalIconComponent],
  template: `
    <div class="auth-layout">
      <div class="auth-brand">
        <a routerLink="/" class="auth-logo">
          <legal-icon name="scale"/><span>Digital Law Firm</span>
        </a>
        <p class="auth-tagline">Justice. Simplified.</p>
      </div>
      <div class="auth-content">
        <router-outlet />
      </div>
      <div class="auth-footer">
        <span>&copy; KAR. All Rights Reserved.</span>
        <a routerLink="/privacy">Privacy</a>
        <a routerLink="/terms">Terms</a>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; }
    .auth-layout {
      min-height: 100vh;
      background: #041e32;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      position: relative;
      &::before {
        content: '';
        position: fixed;
        inset: 0;
        background: radial-gradient(ellipse at 50% 0%, rgba(198,161,91,0.06) 0%, transparent 70%);
        pointer-events: none;
      }
    }
    .auth-brand { text-align: center; margin-bottom: 2rem; }
    .auth-logo {
      font-family: 'Playfair Display', serif;
      display: flex; align-items: center; gap: 12px;
      font-size: 1.6rem;
      font-weight: 700;
      color: #C6A15B;
      letter-spacing: 0.1em;
      text-decoration: none;
    }
    .auth-tagline {
      font-size: 0.75rem;
      color: #9eb1be;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-top: 0.25rem;
    }
    .auth-content { width: 100%; max-width: 440px; position: relative; z-index: 1; }
    .auth-footer {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      margin-top: 2rem;
      font-size: 0.75rem;
      color: #9eb1be;
      a { color: #9eb1be; text-decoration: none; &:hover { color: #C6A15B; } }
    }
  `]
})
export class AuthLayoutComponent {}

