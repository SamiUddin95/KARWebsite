import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LegalIconComponent } from '../legal-icon/legal-icon.component';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'kar-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, LegalIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  auth = inject(AuthService);

  scrolled    = signal(false);
  menuOpen    = signal(false);
  servicesOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void { this.menuOpen.set(!this.menuOpen()); }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.servicesOpen.set(false);
  }

  toggleServices(e: Event): void {
    e.preventDefault();
    this.servicesOpen.set(!this.servicesOpen());
  }

  handlePortalNav(): void {
    this.closeMenu();
    if (this.auth.isLoggedIn()) {
      this.auth.redirectAfterLogin();
    }
  }
}

