import { Component } from '@angular/core';
import { LegalIconComponent } from '../legal-icon/legal-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'kar-footer',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
}

