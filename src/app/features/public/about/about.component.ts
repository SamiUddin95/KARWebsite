import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalIconComponent } from '../../../shared/components/legal-icon/legal-icon.component';

@Component({
  selector: 'kar-about',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    {icon:'scale', title:'Legal Consultation', text:'Consult with verified lawyers online.'},
    {icon:'calendar', title:'Video Appointments', text:'Meet lawyers securely from anywhere.'},
    {icon:'file', title:'Legal Opinions', text:'Get expert legal opinions on your matters.'},
    {icon:'file', title:'Legal Drafting', text:'Professional drafting and legal documents.'},
    {icon:'search', title:'Legal Research', text:'Access laws, case precedents and resources.'},
    {icon:'arrow', title:'Case Submission', text:'Submit your case with all relevant details.'},
    {icon:'briefcase', title:'Case Management', text:'Track progress, hearings and updates in real-time.'},
    {icon:'file', title:'Document Review', text:'Get your documents reviewed by experts.'},
    {icon:'book', title:'Legal Library', text:'Access a rich library of legal content.'},
    {icon:'sparkle', title:'AI Legal Tools', text:'Use AI for research, drafting and analysis.'},
    {icon:'cap', title:'Legal Education', text:'Learn through courses, materials and simulations.'},
    {icon:'briefcase', title:'Internships', text:'Gain practical experience with top lawyers and firms.'},
    {icon:'award', title:'Professional Opportunities', text:'Find jobs, freelance work and career growth.'},
    {icon:'users', title:'Client Management', text:'Manage your clients and communications.'},
    {icon:'building', title:'Law Firm Management', text:'Manage your firm’s operations digitally.'},
    {icon:'check', title:'Payments', text:'Secure and convenient payments and billing.'},
    {icon:'heart', title:'Legal Aid', text:'Get support if eligible and access free legal help.'},
    {icon:'shield', title:'Donation Transparency', text:'Support legal aid and see real impact.'},
    {icon:'chat', title:'Professional Support', text:'End-to-end support whenever you need it.'}
  ];
  values = [
    {icon:'globe', title:'Accessible', text:'Quality legal services and opportunities for everyone, everywhere in Pakistan.'},
    {icon:'users', title:'Connected', text:'Bringing clients, lawyers, firms, students, and donors together in one unified ecosystem.'},
    {icon:'shield', title:'Professional', text:'Verified professionals, credible information, and high-quality legal services.'},
    {icon:'sparkle', title:'Technology-Driven', text:'AI-powered tools, modern digital solutions, and a seamless user experience.'},
    {icon:'file', title:'Transparent', text:'Clear processes, real-time updates, and complete transparency in operations and impact.'},
    {icon:'heart', title:'Human-Centric', text:'Built around people, their needs, and a fairer legal system for a stronger Pakistan.'}
  ];
  nodes = [
    {icon:'users', name:'Client', text:'Get Legal Help', color:'#2a6a94', route:'/lawyers', role:''},
    {icon:'building', name:'Law Firm', text:'Manages Clients, Cases, Lawyers, Operations', color:'#2e6b45', route:'/contact', role:''},
    {icon:'cap', name:'Student', text:'Learns, Practices, Interns, Builds Career', color:'#33617f', route:'/courses', role:''},
    {icon:'scale', name:'Legal Aid', text:'Supports Legal Aid, Connects Donors, Lawyers', color:'#a8842f', route:'/donate', role:''},
    {icon:'heart', name:'Donor', text:'Supports Justice, Sees Transparent Utilisation', color:'#7c2740', route:'/donate', role:''},
    {icon:'user', name:'Lawyer', text:'Provides Legal Services & Builds Practice', color:'#7a5a26', route:'/auth/register', role:'Lawyer'}
  ];
  outcomes = ['More Access to Justice','More Opportunities','More Skilled Professionals','Stronger Communities','A Brighter, Fairer Pakistan'];
  roles = [
    {icon:'users', cls:'role-client', label:'Client portal', title:'I Need Legal Help', text:'Consult with verified lawyers, book appointments, submit cases and track progress — all in one place.', cta:'Get Legal Help', route:'/auth/register', role:'Client', footer:'Your Legal Journey. Our Priority.'},
    {icon:'user', cls:'role-lawyer', label:'Lawyer portal', title:'I Am a Lawyer', text:'Get clients, work on real cases, use AI tools, grow your practice and earn more.', cta:'Work & Earn', route:'/auth/register', role:'Lawyer', footer:'Your Expertise. Greater Impact.'},
    {icon:'building', cls:'role-firm', label:'Law firm portal', title:'I Run a Law Firm', text:'Manage clients, cases, lawyers, documents, payments and operations digitally.', cta:'Manage & Grow', route:'/contact', role:'', footer:'A More Efficient, More Profitable Firm.'},
    {icon:'cap', cls:'role-student', label:'Student portal', title:'I Am a Law Student', text:'Learn law, build practical skills, find internships and opportunities for a brighter future.', cta:'Learn & Build Your Career', route:'/auth/register', role:'Student', footer:'Learn Today. Lead Tomorrow.'},
    {icon:'heart', cls:'role-donor', label:'Legal aid & donor portal', title:'I Want to Support Access to Justice', text:'Support legal aid, track cases, transparent utilisation and real impact.', cta:'Give Transparently', route:'/donate', role:'', footer:'Justice Within Reach. For Every Pakistani.'}
  ];
  impact = [
    {icon:'users', value:'50,000+', label:'Lives Empowered'},
    {icon:'scale', value:'10,000+', label:'Legal Professionals'},
    {icon:'building', value:'500+', label:'Law Firms'},
    {icon:'file', value:'100,000+', label:'Cases & Matters'},
    {icon:'globe', value:'', label:'A Stronger Pakistan'}
  ];
}
