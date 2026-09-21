import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '@core/services/auth.service';
import { UserRole } from '@core/enums/app.enums';

interface NavItem { label: string; route: string; icon: string; }

@Component({
  selector: 'kar-portal-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './portal-layout.component.html',
  styleUrl: './portal-layout.component.scss'
})
export class PortalLayoutComponent {
  auth   = inject(AuthService);
  router = inject(Router);

  sidebarOpen = signal(true);

  toggleSidebar(): void { this.sidebarOpen.update(v => !v); }

  get navItems(): NavItem[] {
    const role = this.auth.userRole();
    switch (role) {
      case UserRole.Lawyer:
        return [
          { label: 'Dashboard',    route: '/lawyer/dashboard',    icon: 'grid' },
          { label: 'Cases',        route: '/lawyer/cases',        icon: 'briefcase' },
          { label: 'Appointments', route: '/lawyer/appointments', icon: 'calendar' },
          { label: 'Profile',      route: '/lawyer/profile',      icon: 'user' },
        ];
      case UserRole.Student:
        return [
          { label: 'Dashboard', route: '/student/dashboard', icon: 'grid' },
          { label: 'Courses',   route: '/student/courses',   icon: 'book' },
        ];
      case UserRole.Donor:
        return [
          { label: 'Dashboard', route: '/donor/dashboard', icon: 'grid' },
          { label: 'Donate',    route: '/donor/donate',    icon: 'heart' },
        ];
      default:
        return [
          { label: 'Dashboard',    route: '/client/dashboard',    icon: 'grid' },
          { label: 'My Cases',     route: '/client/cases',        icon: 'briefcase' },
          { label: 'Appointments', route: '/client/appointments', icon: 'calendar' },
          { label: 'Documents',    route: '/client/documents',    icon: 'file' },
          { label: 'Profile',      route: '/client/profile',      icon: 'user' },
        ];
    }
  }

  get portalTitle(): string {
    const role = this.auth.userRole();
    switch (role) {
      case UserRole.Lawyer:  return 'Lawyer Portal';
      case UserRole.Student: return 'Student Portal';
      case UserRole.Donor:   return 'Donor Portal';
      default:               return 'Client Portal';
    }
  }
}
