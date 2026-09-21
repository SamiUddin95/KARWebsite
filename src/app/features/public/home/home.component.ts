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
  templateUrl: './home.component.html', styleUrls: ['./home.component.scss', './home-sections.component.scss', './home-hero-details.component.scss']
})
export class HomeComponent {
  private router = inject(Router);
  portals = [
    {name:'Clients', label:'Client portal', icon:'users', color:'blue', title:'Get Legal Help.', tagline:'Manage Your Matter Digitally.', image:'assets/images/portal-laptop.svg', description:'Your Legal Journey: Our Priority.', features:['Video Consultation Options','Document Submission','Case Tracking','Lawyer Matching'], cta:'Enter Client Portal', route:'/auth/register', role:'Client'},
    {name:'Lawyers', label:'Lawyer portal', icon:'user', color:'gold', title:'Work. Practice. Earn.', tagline:'Grow your practice online.', image:'assets/images/portal-laptop.svg', description:'Your expertise. Greater impact.', features:['Connect with clients','Organize your cases','Build your reputation'], cta:'Join as a lawyer', route:'/auth/register', role:'Lawyer'},
    {name:'Law firms', label:'Law firm solutions', icon:'building', color:'green', title:'A smarter practice.', tagline:'Streamline firm operations.', image:'assets/images/portal-laptop.svg', description:'More connected. More efficient.', features:['Explore digital workflows','Connect your practice','Discuss your firm’s needs'], cta:'Talk to our team', route:'/contact', role:''},
    {name:'Students', label:'Student portal', icon:'cap', color:'royal', title:'Build your future.', tagline:'Learn practical legal skills.', image:'assets/images/portal-laptop.svg', description:'Learn today. Lead tomorrow.', features:['Explore legal courses','Develop practical skills','Grow your legal knowledge'], cta:'Join as a student', route:'/auth/register', role:'Student'},
    {name:'Legal aid & donors', label:'Legal aid & donor portal', icon:'heart', color:'rose', title:'Access to justice.', tagline:'Make giving meaningful.', image:'assets/images/portal-laptop.svg', description:'Justice within reach. For everyone.', features:['Support legal assistance','Explore ways to give','Make a meaningful difference'], cta:'Explore legal aid', route:'/donate', role:''}
  ];
  journey = [
    {icon:'search', title:'Find your lawyer', text:'Explore expertise that fits your needs.', route:'/lawyers'},
    {icon:'calendar', title:'Book a consultation', text:'Take the first step with confidence.', route:'/auth/register'},
    {icon:'file', title:'Share documents', text:'Keep your legal matters organized.', route:'/client/documents'},
    {icon:'chat', title:'Stay connected', text:'Keep in touch with your legal team.', route:'/client/appointments'},
    {icon:'shield', title:'Track your case', text:'Follow your matter, every step.', route:'/courts'}
  ];
  stats = [
    {icon:'cap', value:'4,500+', label:'Students'},
    {icon:'book', value:'200+', label:'Learning Resources'},
    {icon:'clock', value:'28 Hours', label:'CPD Training'},
    {icon:'pin', value:'92%', label:'Success Rate'}
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
  impact = [
    {icon:'users', value:'50,000+', label:'People Empowered'},
    {icon:'scale', value:'10,000+', label:'Legal Professionals'},
    {icon:'building', value:'500+', label:'Law Firms'},
    {icon:'file', value:'100,000+', label:'Cases & Matters'},
    {icon:'globe', value:'', label:'A Stronger Pakistan'}
  ];
  search(value: string): void { this.router.navigate(['/lawyers'], {queryParams: {q: value.trim()}}); }
}



