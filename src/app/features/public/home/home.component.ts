import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LegalIconComponent } from '../../../shared/components/legal-icon/legal-icon.component';
import { ClientJourneyComponent } from '../../../shared/components/client-journey/client-journey.component';
import { HeroShowcaseComponent } from '../../../shared/components/hero-showcase/hero-showcase.component';
import { PortalPreviewComponent } from '../../../shared/components/portal-preview/portal-preview.component';

@Component({
  selector: 'kar-home', standalone: true,
  imports: [RouterLink, LegalIconComponent, PortalPreviewComponent, HeroShowcaseComponent, ClientJourneyComponent],
  templateUrl: './home.component.html', styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private router = inject(Router);
  portals = [
    {name:'Clients', icon:'users', title:'Client Portal', tagline:'Get legal help and manage your matter digitally.', features:['Video consultations','Secure document upload','Real-time case tracking','Lawyer matching'], cta:'Enter client portal', route:'/auth/register', role:'Client'},
    {name:'Lawyers', icon:'briefcase', title:'Lawyer Portal', tagline:'Find clients, manage cases and grow your practice.', features:['Paid legal tasks','Client consultations','Case management tools','Earnings dashboard'], cta:'Join as a lawyer', route:'/for-lawyers', role:''},
    {name:'Law firms', icon:'building', title:'Law Firm Solutions', tagline:'Bring your firm’s matters and team into one workspace.', features:['Digital workflows','Team & matter management','Dedicated onboarding'], cta:'Talk to our team', route:'/contact', role:''},
    {name:'Students', icon:'cap', title:'Student Portal', tagline:'Practical legal education and real career opportunities.', features:['Legal courses','Internship programs','Certificates & verification','AI research assistant'], cta:'Join as a student', route:'/auth/register', role:'Student'},
    {name:'Legal aid & donors', icon:'heart', title:'Legal Aid & Donors', tagline:'Apply for aid or fund access to justice transparently.', features:['Free legal aid applications','Transparent fund tracking','Verified impact reporting'], cta:'Explore legal aid', route:'/donate', role:''}
  ];
  stats = [
    {icon:'cap', value:'4,500+', label:'Students enrolled'},
    {icon:'book', value:'200+', label:'Learning resources'},
    {icon:'clock', value:'28 hrs', label:'CPD training'},
    {icon:'award', value:'Verified', label:'Certificates'}
  ];
  learningTools = [
    {icon:'play', title:'Video Lectures'},
    {icon:'file', title:'Practice Tests'},
    {icon:'book', title:'Case Library'},
    {icon:'sparkle', title:'AI Legal Assistant'}
  ];
  careerTools = [
    {icon:'briefcase', title:'Internship Programs'},
    {icon:'award', title:'Certificates'},
    {icon:'users', title:'Mentorship'},
    {icon:'globe', title:'Job Wall Community'}
  ];
  search(value: string): void { this.router.navigate(['/lawyers'], {queryParams: {q: value.trim()}}); }
}
