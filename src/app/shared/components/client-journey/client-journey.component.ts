import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalIconComponent } from '../legal-icon/legal-icon.component';

@Component({
  selector: 'client-journey',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  templateUrl: './client-journey.component.html',
  styleUrl: './client-journey.component.scss'
})
export class ClientJourneyComponent {
  steps: {icon:string; title:string; screen:string; type:string; route:string; done?:string}[] = [
    {icon:'calendar', title:'Book Consultation', screen:'Book Consultation', type:'people', route:'/lawyers'},
    {icon:'file', title:'Upload Your Matter', screen:'Upload Documents', type:'list', route:'/client/documents'},
    {icon:'calendar', title:'Choose Date & Time', screen:'Select Date & Time', type:'calendar', route:'/client/appointments'},
    {icon:'shield', title:'Secure Payment', screen:'Payment Method', type:'payment', route:'/client/payments'},
    {icon:'play', title:'Video Consultation', screen:'Consultation', type:'call', route:'/lawyers'},
    {icon:'book', title:'Legal Opinion', screen:'Legal Opinion', type:'list', route:'/client/documents'},
    {icon:'check', title:'Submit Case', screen:'Submit Case', type:'confirmed', route:'/client/cases', done:'Case Submitted'},
    {icon:'search', title:'Track Your Case', screen:'Track my case', type:'timeline', route:'/client/cases'},
    {icon:'chat', title:'Stay Connected', screen:'Your legal team', type:'people', route:'/lawyers'}
  ];
  calCells = Array.from({length:28},(_,i)=>i);
  tlRows = [1,2,3,4];
  features = [
    {icon:'chat',title:'Connect with your lawyer',text:'Start a conversation with the right expert.',route:'/lawyers'},
    {icon:'briefcase',title:'Manage your cases',text:'Keep your legal matters in one place.',route:'/client/cases'},
    {icon:'file',title:'Access legal documents',text:'Your documents, wherever you are.',route:'/client/documents'},
    {icon:'users',title:'Get expert guidance',text:'Find support for your next step.',route:'/lawyers'}
  ];
  rows = [1, 2, 3, 4, 5];
}
