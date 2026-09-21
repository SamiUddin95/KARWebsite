import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import { roleGuard } from '@core/guards/role.guard';
import { UserRole } from '@core/enums/app.enums';

export const routes: Routes = [
  // Public site
  {
    path: '',
    loadComponent: () => import('./layout/public-layout/public-layout.component').then(m => m.PublicLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/public/home/home.component').then(m => m.HomeComponent) },
      { path: 'lawyers', loadComponent: () => import('./features/public/lawyers/lawyers.component').then(m => m.LawyersComponent) },
      { path: 'clients', loadComponent: () => import('./features/public/client-page/client-page.component').then(m => m.ClientPageComponent) },
      { path: 'lawyers/:id', loadComponent: () => import('./features/public/lawyer-profile/lawyer-profile.component').then(m => m.LawyerProfileComponent) },
      { path: 'services', loadComponent: () => import('./features/public/services/services.component').then(m => m.ServicesComponent) },
      { path: 'technology', data: { technology: true }, loadComponent: () => import('./features/public/explore.component').then(m => m.ExploreComponent) },
      { path: 'resources', loadComponent: () => import('./features/public/explore.component').then(m => m.ExploreComponent) },
      { path: 'practice-areas', loadComponent: () => import('./features/public/practice-areas/practice-areas.component').then(m => m.PracticeAreasComponent) },
      { path: 'courts', loadComponent: () => import('./features/public/courts/courts.component').then(m => m.CourtsComponent) },
      { path: 'courses', loadComponent: () => import('./features/public/courses/courses.component').then(m => m.CoursesComponent) },
      { path: 'donate', loadComponent: () => import('./features/public/donate/donate.component').then(m => m.DonateComponent) },
      { path: 'about', loadComponent: () => import('./features/public/about/about.component').then(m => m.AboutComponent) },
      { path: 'contact', loadComponent: () => import('./features/public/contact/contact.component').then(m => m.ContactComponent) },
      { path: 'faq', loadComponent: () => import('./features/public/faq/faq.component').then(m => m.FaqComponent) },
      { path: 'privacy', loadComponent: () => import('./features/public/legal/privacy.component').then(m => m.PrivacyComponent) },
      { path: 'terms', loadComponent: () => import('./features/public/legal/terms.component').then(m => m.TermsComponent) },
    ]
  },

  // Auth
  {
    path: 'auth',
    loadComponent: () => import('./layout/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      { path: 'login',    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent) },
      { path: 'forgot-password', loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
    ]
  },

  // Client portal
  {
    path: 'client',
    loadComponent: () => import('./layout/portal-layout/portal-layout.component').then(m => m.PortalLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.Client] },
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/client/dashboard/client-dashboard.component').then(m => m.ClientDashboardComponent) },
      { path: 'cases', loadComponent: () => import('./features/client/cases/client-cases.component').then(m => m.ClientCasesComponent) },
      { path: 'cases/:id', loadComponent: () => import('./features/client/case-detail/client-case-detail.component').then(m => m.ClientCaseDetailComponent) },
      { path: 'appointments', loadComponent: () => import('./features/client/appointments/client-appointments.component').then(m => m.ClientAppointmentsComponent) },
      { path: 'documents', loadComponent: () => import('./features/client/documents/client-documents.component').then(m => m.ClientDocumentsComponent) },
      { path: 'profile', loadComponent: () => import('./features/client/profile/client-profile.component').then(m => m.ClientProfileComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  // Lawyer portal
  {
    path: 'lawyer',
    loadComponent: () => import('./layout/portal-layout/portal-layout.component').then(m => m.PortalLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.Lawyer] },
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/lawyer/dashboard/lawyer-dashboard.component').then(m => m.LawyerDashboardComponent) },
      { path: 'onboarding', loadComponent: () => import('./features/lawyer/onboarding/lawyer-onboarding.component').then(m => m.LawyerOnboardingComponent) },
      { path: 'cases', loadComponent: () => import('./features/lawyer/cases/lawyer-cases.component').then(m => m.LawyerCasesComponent) },
      { path: 'appointments', loadComponent: () => import('./features/lawyer/appointments/lawyer-appointments.component').then(m => m.LawyerAppointmentsComponent) },
      { path: 'profile', loadComponent: () => import('./features/lawyer/profile/lawyer-profile.component').then(m => m.LawyerProfilePageComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  // Student portal
  {
    path: 'student',
    loadComponent: () => import('./layout/portal-layout/portal-layout.component').then(m => m.PortalLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.Student] },
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/student/dashboard/student-dashboard.component').then(m => m.StudentDashboardComponent) },
      { path: 'courses', loadComponent: () => import('./features/student/courses/student-courses.component').then(m => m.StudentCoursesComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  // Donor portal
  {
    path: 'donor',
    loadComponent: () => import('./layout/portal-layout/portal-layout.component').then(m => m.PortalLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.Donor] },
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/donor/dashboard/donor-dashboard.component').then(m => m.DonorDashboardComponent) },
      { path: 'donate', loadComponent: () => import('./features/donor/donate/donor-donate.component').then(m => m.DonorDonateComponent) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },

  { path: '**', redirectTo: '' }
];
