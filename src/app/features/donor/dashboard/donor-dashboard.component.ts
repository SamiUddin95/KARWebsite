import { Component } from '@angular/core';
import { StubComponent } from '@shared/stub.component';

@Component({
  selector: 'kar-stub-page',
  standalone: true,
  imports: [StubComponent],
  template: `<kar-stub title="Donor Dashboard" />`
})
export class DonorDashboardComponent {}