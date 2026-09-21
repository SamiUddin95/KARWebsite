import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { UserRole } from '@core/enums/app.enums';

@Component({
  selector: 'kar-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private fb     = inject(FormBuilder);
  private auth   = inject(AuthService);
  private router = inject(Router);

  private route = inject(ActivatedRoute);

  loading  = signal(false);
  error    = signal<string | null>(null);
  showPass = signal(false);

  roles: { value: UserRole; label: string; description: string }[] = [
    { value: UserRole.Client,  label: 'Client',  description: 'I need legal assistance' },
    { value: UserRole.Lawyer,  label: 'Lawyer',  description: 'I provide legal services' },
    { value: UserRole.Student, label: 'Student', description: 'I want to learn law' },
    { value: UserRole.Donor,   label: 'Donor',   description: 'I want to support legal aid' },
  ];

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email:    ['', [Validators.required, Validators.email]],
    phone:    [''],
    role:     [UserRole.Client, Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  }, { validators: this.matchPasswords });

  constructor() {
    const role = this.route.snapshot.queryParamMap.get('role');
    if (this.roles.some(item => item.value === role)) {
      this.form.patchValue({role: role as UserRole});
    }
  }

  matchPasswords(group: import('@angular/forms').AbstractControl) {
    const p  = group.get('password')?.value;
    const cp = group.get('confirmPassword')?.value;
    return p && cp && p !== cp ? { mismatch: true } : null;
  }

  selectRole(role: UserRole): void {
    this.form.patchValue({ role });
  }

  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.error.set(null);
    const v = this.form.value;
    this.auth.register({
      fullName: v.fullName!,
      email: v.email!,
      password: v.password!,
      confirmPassword: v.confirmPassword!,
      phone: v.phone ?? undefined,
      role: v.role!
    }).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/auth/login']);
      },
      error: (err: { error?: { errorMessage?: string } }) => {
        this.loading.set(false);
        this.error.set(err?.error?.errorMessage ?? 'Registration failed. Please try again.');
      }
    });
  }

  togglePass(): void { this.showPass.set(!this.showPass()); }

  get f() { return this.form.controls; }
}

