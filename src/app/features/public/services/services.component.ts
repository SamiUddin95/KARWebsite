import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalIconComponent } from '@shared/components/legal-icon/legal-icon.component';
import { ClientJourneyComponent } from '@shared/components/client-journey/client-journey.component';

@Component({
  selector: 'kar-services-page',
  standalone: true,
  imports: [RouterLink, LegalIconComponent, ClientJourneyComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  stats = [
    {icon:'users', value:'50,000+', label:'People Served'},
    {icon:'award', value:'5,000+', label:'Verified Lawyers'},
    {icon:'building', value:'500+', label:'Law Firms'},
    {icon:'cap', value:'10,000+', label:'Law Students'},
    {icon:'heart', value:'', label:'Justice for All'}
  ];
  ecoNodes = [
    {icon:'users', name:'Clients', text:'Get Legal Help', color:'#1d6a94', route:'/clients'},
    {icon:'briefcase', name:'Lawyers', text:'Work & Grow', color:'#a58043', route:'/for-lawyers'},
    {icon:'building', name:'Law Firms', text:'Manage & Scale', color:'#1d6a44', route:'/contact'},
    {icon:'cap', name:'Students', text:'Learn & Rise', color:'#0b315c', route:'/courses'},
    {icon:'heart', name:'Legal Aid & Donors', text:'Support Justice & Inclusion', color:'#8a2f43', route:'/donate'}
  ];
  portals = [
    {tag:'CLIENT', tagline:'Legal Help', img:'assets/images/legalhelp.jpg', cls:'navy', route:'/clients', cta:'Enter Portal',
      items:['Consult Lawyers','View Services','Get Legal Opinion','Submit & Track Cases','Secure Payments']},
    {tag:'LAWYER', tagline:'Work. Earn. Grow.', img:'assets/images/man.png', cls:'gold', route:'/for-lawyers', cta:'Join as Lawyer',
      items:['Verified Profile','Task Opportunities','Case Assignment','Video Consultations','Drafting & Research','Earnings Dashboard']},
    {tag:'LAW FIRM', tagline:'Manage. Digitise.', img:'assets/images/karachi-legal.jpg', cls:'teal', route:'/contact', cta:'Join as Law Firm',
      items:['Client Case Management','Team Management','Payments & Billing','e-Legal Tech','Marketing & Analytics']},
    {tag:'STUDENT', tagline:'Learn. Practice.', img:'assets/images/study.png', cls:'blue', route:'/courses', cta:'Join as Student',
      items:['Learning Programs','Practical Exercises','Certificates','Internships','Referral Program']},
    {tag:'LEGAL AID', tagline:'Give. Support.', img:'assets/images/handshaking.png', cls:'maroon', route:'/donate', cta:'Explore Legal Aid',
      items:['Apply for Free Legal Aid','Support through Fund','Transparent Tracking','Real Social Impact','Stronger Communities']}
  ];
  lawyerFeatures = [
    {icon:'users', title:'Verified Professional Network'},
    {icon:'search', title:'Find Tasks & Consultations'},
    {icon:'briefcase', title:'Case Assignments'},
    {icon:'sparkle', title:'AI Legal Workspace'},
    {icon:'award', title:'Earnings & Performance'},
    {icon:'clock', title:'Professional Growth'}
  ];
  memberships = [
    {name:'PLATINUM', court:'Supreme Court', years:'8+ Yrs', detail:'Supreme Court Practitioner', cls:'platinum'},
    {name:'GOLD', court:'High Court', years:'6+ Yrs', detail:'High Court Practitioner', cls:'gold'},
    {name:'SILVER', court:'High Court', years:'4+ Yrs', detail:'City Court Practitioner', cls:'silver'},
    {name:'BRONZE', court:'City Court', years:'2+ Yrs', detail:'City Court Practitioner', cls:'bronze'},
    {name:'STUDENT', court:'Legal Student', years:'', detail:'Learning Membership', cls:'student'},
    {name:'LAW FIRM', court:'Verified', years:'', detail:'Law Firm', cls:'firm'},
    {name:'HONOUR', court:'Honour', years:'', detail:'Honour Member', cls:'honour'}
  ];
  studentFeatures = [
    {icon:'book', title:'Learning Programs'},
    {icon:'file', title:'Practical Exercises'},
    {icon:'sparkle', title:'AI Legal Assistant'},
    {icon:'award', title:'Certificates'},
    {icon:'briefcase', title:'Internships'},
    {icon:'users', title:'Referral Program'},
    {icon:'scale', title:'Case Experience'},
    {icon:'user', title:'Career Profile'}
  ];
  impactStats = [
    {value:'PKR 150,000', label:'Total Donated'},
    {value:'PKR 92,000', label:'Allocated'},
    {value:'PKR 78,500', label:'Utilised'},
    {value:'PKR 71,500', label:'Available Balance'}
  ];
  impactCases = [
    {value:'14', label:'Cases Supported'},
    {value:'8', label:'Active'},
    {value:'6', label:'Completed'}
  ];
  aiTools = [
    {icon:'sparkle', title:'AI Drafting', text:'Get auto-filled legal documents.', items:['Legal Notice','Written Statement','Agreement'], cta:'Generate Draft', route:'/auth/login'},
    {icon:'search', title:'AI Research', text:'Search Pakistani law & case laws.', items:['Constitution','Petition','Case Law','Legal Provision'], cta:'Search Now', route:'/auth/login'},
    {icon:'cap', title:'AI Learning', text:'Explain, summarize and study.', items:['Explain Provision','Summarize Judgment','Create Study Notes','Generate Quiz'], cta:'Start Learning', route:'/courses'}
  ];
  roles = [
    {icon:'users', title:'I Need Legal Help', portal:'Client Portal', cta:'Get Started', route:'/clients', cls:'navy'},
    {icon:'briefcase', title:'I Am a Lawyer', portal:'Lawyer Portal', cta:'Join Now', route:'/for-lawyers', cls:'gold'},
    {icon:'building', title:'I Am a Law Firm', portal:'Law Firm Portal', cta:'Join Now', route:'/contact', cls:'teal'},
    {icon:'cap', title:'I Am a Student', portal:'Student Portal', cta:'Join Now', route:'/courses', cls:'blue'},
    {icon:'heart', title:'I Want to Support Legal Aid', portal:'Legal Aid & Donors', cta:'Get Involved', route:'/donate', cls:'maroon'}
  ];
  phoneMenu = ['Consultations','My Cases','Documents','Payments','Messages','Appointments'];
  phoneIcons = ['chat','briefcase','file','briefcase','chat','calendar'];
}
