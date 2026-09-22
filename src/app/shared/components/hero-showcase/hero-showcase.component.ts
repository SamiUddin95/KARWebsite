import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalIconComponent } from '../legal-icon/legal-icon.component';

@Component({
  selector: 'hero-showcase',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  templateUrl: './hero-showcase.component.html',
  styleUrl: './hero-showcase.component.scss'
})
export class HeroShowcaseComponent {
  audiences = [
    { name: 'Client', detail: 'Get Legal Help', icon: 'users', color: 'client', route: '/clients', role: '' },
    { name: 'Lawyer', detail: 'Work & Earn', icon: 'user', color: 'lawyer', route: '/for-lawyers', role: '' },
    { name: 'Law Firm', detail: 'Manage & Grow', icon: 'building', color: 'firm', route: '/contact', role: '' },
    { name: 'Student', detail: 'Learn & Build', icon: 'cap', color: 'student', route: '/auth/register', role: 'Student' },
    { name: 'Legal Aid & Donors', detail: 'Access Justice', icon: 'heart', color: 'donor', route: '/donate', role: '' }
  ];
  menu = ['Dashboard', 'Cases', 'Consultations', 'Documents', 'Appointments', 'Messages', 'Payments', 'AI Assistant'];
  metrics = [{icon:'briefcase',value:'24',label:'Total cases'}, {icon:'users',value:'18',label:'Active matters'}, {icon:'calendar',value:'12',label:'Appointments'}, {icon:'file',value:'08',label:'Documents'}];
  activity = ['Document submitted', 'Hearing date scheduled', 'Legal opinion received', 'Payment completed'];
  actions = [
    {icon:'calendar',label:'Book Consultation',route:'/lawyers'},
    {icon:'file',label:'Upload Documents',route:'/client/documents'},
    {icon:'search',label:'Track My Case',route:'/courts'},
    {icon:'chat',label:'Contact a Lawyer',route:'/lawyers'},
    {icon:'heart',label:'Support Legal Aid',route:'/donate'}
  ];
}
