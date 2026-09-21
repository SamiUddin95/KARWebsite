import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { UserRole } from '@core/enums/app.enums';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth    = inject(AuthService);
  const router  = inject(Router);
  const allowed: UserRole[] = route.data['roles'] ?? [];

  if (!auth.isLoggedIn()) {
    router.navigate(['/auth/login']);
    return false;
  }

  const role = auth.userRole();
  if (allowed.length && role && !allowed.includes(role)) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
