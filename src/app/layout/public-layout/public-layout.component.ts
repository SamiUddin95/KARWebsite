import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@Component({
  selector: 'kar-public-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  styles: [':host { display: block; }'],
  template: `
    <kar-navbar />
    <main>
      <router-outlet />
    </main>
    <kar-footer />
  `
})
export class PublicLayoutComponent {
  constructor() { inject(ViewportScroller).setOffset([0, 95]); }
}


