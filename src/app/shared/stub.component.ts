import { Component, Input } from '@angular/core';

// Generic stub for pages under active development
@Component({
  selector: 'kar-stub',
  standalone: true,
  template: `
    <div style="padding:4rem 2rem;text-align:center">
      <div style="font-family:'Playfair Display',serif;font-size:3rem;color:rgba(198,161,91,0.15);font-weight:700;margin-bottom:1rem">KAR</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:1.75rem;color:#F5F5F5;margin-bottom:0.75rem">{{ title }}</h2>
      <p style="font-size:0.875rem;color:#666;max-width:400px;margin:0 auto">
        This section is under development and will be available soon.
      </p>
    </div>
  `
})
export class StubComponent {
  @Input() title = 'Coming Soon';
}
