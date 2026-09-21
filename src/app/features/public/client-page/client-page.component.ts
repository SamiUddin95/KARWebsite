import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalIconComponent } from '@shared/components/legal-icon/legal-icon.component';

@Component({
  selector: 'kar-client-page',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss', './client-sections.component.scss', './client-hero.component.scss', './client-workspace.component.scss']
})
export class ClientPageComponent {
  trust = [
    {icon:'shield', title:'Secure & Confidential', text:'Your data is protected'},
    {icon:'award', title:'Verified Lawyers', text:'Across Pakistan'},
    {icon:'clock', title:'End-to-End Support', text:'From consultation to resolution'}
  ];
  phoneMenu = ['Book Consultation','Upload Documents','Track My Case','Chat with Lawyer','Make a Payment'];
  phoneIcons = ['calendar','file','search','chat','briefcase'];
  features = [
    {icon:'play', title:'Video Consultation', text:'Consult with verified lawyers via secure video calls.'},
    {icon:'file', title:'Document Upload', text:'Upload documents, audio notes and chats securely.'},
    {icon:'book', title:'Legal Opinion', text:'Receive written legal opinions from your lawyer.'},
    {icon:'file', title:'Case Submission', text:'Submit your case with all relevant details and documents.'},
    {icon:'search', title:'Case Tracking', text:'Track the progress of your case in real-time.'},
    {icon:'calendar', title:'Hearing Updates', text:'Get notified about upcoming hearings and orders.'},
    {icon:'user', title:'Appointed Lawyers', text:'View and connect with your assigned legal team.'},
    {icon:'chat', title:'Group Chat', text:'Communicate securely with your lawyers.'},
    {icon:'scale', title:'Transparent Billing', text:'Documented fee structure with clear invoices.'},
    {icon:'briefcase', title:'Payments', text:'Pay consultation and case fees securely (PKR).'}
  ];
  videoChecks = [
    {icon:'play', text:'HD video & clear audio'},
    {icon:'file', text:'Screen sharing & document review'},
    {icon:'clock', text:'Record (with consent)'},
    {icon:'shield', text:'Secure & encrypted'},
    {icon:'pin', text:'Available across Pakistan'}
  ];
  docFeats = [
    {icon:'shield', text:'End-to-End Encryption'},
    {icon:'user', text:'Role-Based Access Control'},
    {icon:'file', text:'Secure File Storage'},
    {icon:'chat', text:'Confidential Communications'},
    {icon:'scale', text:'Compliance with Legal & Privacy Standards'}
  ];
  docs = [
    {name:'Bail Application.pdf', meta:'2.4 MB · 10 Mar 2025'},
    {name:'CNIC Copy.pdf', meta:'1.1 MB · 10 Mar 2025'},
    {name:'Case Notes (Malik).docx', meta:'3.3 MB · 09 Mar 2025'},
    {name:'Supporting Documents.zip', meta:'8.2 MB · 08 Mar 2025'}
  ];
  supportItems = [
    {icon:'users', text:'People'},
    {icon:'briefcase', text:'Process'},
    {icon:'sparkle', text:'Technology'},
    {icon:'scale', text:'A More Just Pakistan'}
  ];
  ctaBadges = [
    {icon:'clock', title:'Fast & Secure Access', text:'Get started in minutes'},
    {icon:'award', title:'Verified Legal Professionals', text:'Trusted across Pakistan'},
    {icon:'shield', title:'Your Privacy, Our Priority', text:'100% confidential'}
  ];
}



