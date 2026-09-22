import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalIconComponent } from '@shared/components/legal-icon/legal-icon.component';

@Component({
  selector: 'kar-lawyer-page',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  templateUrl: './lawyer-page.component.html',
  styleUrls: ['./lawyer-page.component.scss', './lawyer-hero.component.scss']
})
export class LawyerPageComponent {
  lapMenu = [
    {icon:'grid', label:'Dashboard', active:true},
    {icon:'file', label:'Tasks'},
    {icon:'briefcase', label:'Cases'},
    {icon:'play', label:'Consultations'},
    {icon:'sparkle', label:'AI Workspace'},
    {icon:'calendar', label:'Earnings'},
    {icon:'book', label:'Library'},
    {icon:'user', label:'Profile'}
  ];
  lapTasks = [
    {title:'Draft Civil Suit for Recovery of Dues', sub:'Drafting', amt:'PKR 15,000'},
    {title:'Legal Opinion on Tenancy Matter', sub:'Opinion', amt:'PKR 10,000'},
    {title:'Video Consultation — Family Matter', sub:'Consultation', amt:'PKR 5,000'}
  ];
  heroStats = [
    {icon:'users', value:'50,000+', label:'Clients Across Pakistan'},
    {icon:'file', value:'10,000+', label:'Legal Tasks Posted'},
    {icon:'briefcase', value:'PKR 25M+', label:'Earnings for Lawyers'},
    {icon:'scale', value:'A Stronger', label:'Legal Ecosystem'}
  ];
  features = [
    {icon:'award', title:'Professional Verification', text:'Verified lawyers can access and earn top-tier opportunities.', link:'Verified & Trusted', route:'/auth/register'},
    {icon:'play', title:'Paid Video Consultations', text:'Consult with clients across Pakistan through secure video calls.', link:'Start Consulting', route:'/client/appointments'},
    {icon:'search', title:'Legal Research Tools', text:'Assist with legal research across all relevant matters.', link:'Browse Research Tasks', route:'/lawyers'},
    {icon:'file', title:'Drafting Tasks', text:'Draft plaints, notices, agreements and more.', link:'See Drafting Tasks', route:'/lawyers'},
    {icon:'scale', title:'Legal Opinions', text:'Provide written legal opinions for diverse matters.', link:'View Opinion Requests', route:'/lawyers'},
    {icon:'briefcase', title:'Case Assignments', text:'Get appointed on real cases from law firms, NGOs and corporates.', link:'Apply Assigned Cases', route:'/lawyers'},
    {icon:'sparkle', title:'AI Legal Workspace', text:'Use advanced AI tools for drafting, research, case law and more.', link:'Explore AI Tools', route:'/lawyers'},
    {icon:'book', title:'Legal Library', text:'Access statutes, case precedents, judgments and legal resources.', link:'Visit Library', route:'/courses'},
    {icon:'calendar', title:'Earnings Dashboard', text:'Track your income, payments and growth in real-time.', link:'View Earnings', route:'/client/cases'},
    {icon:'cap', title:'Professional Growth', text:'Build your profile, earn badges and grow your reputation.', link:'Grow Your Profile', route:'/auth/register'}
  ];
  memberships = [
    {name:'PLATINUM', level:'Supreme Court', years:'Supreme Court Practitioner', cls:'platinum', icon:'building'},
    {name:'GOLD', level:'High Court', years:'6+ Years', sub:'High Court Practitioner', cls:'gold', icon:'building'},
    {name:'SILVER', level:'City Court', years:'4+ Years', sub:'City Court Practitioner', cls:'silver', icon:'building'},
    {name:'BRONZE', level:'City Court', years:'2+ Years', sub:'City Court Practitioner', cls:'bronze', icon:'building'},
    {name:'STUDENT', level:'Legal Student', years:'', cls:'student', icon:'cap'},
    {name:'LAW FIRM', level:'Verified', years:'Law Firm', cls:'firm', icon:'building'},
    {name:'HONOUR', level:'Honour Member', years:'', cls:'honour', icon:'sparkle'}
  ];
  memberChecks = ['Be Recognized','Get Opportunities','Grow Your Network','Make an Impact'];
  journey = [
    'Apply|Create your lawyer account',
    'Verification|Submit Bar Council & credentials',
    'Professional Category|Get verified & assigned category',
    'Account Ready|Access earning dashboard',
    'Receive Tasks|Get matched with relevant opportunities',
    'Consult Clients|Paid video & chat consultations',
    'Research & Draft|Use AI tools & workspace resources',
    'Handle Cases|Work on assigned legal matters',
    'Earn|Receive payments & grow practice',
    'Grow Profile|Build reputation & earn more'
  ].map(s => { const [title, text] = s.split('|'); return {title, text}; });
  tasks = [
    {title:'Civil Suit for Recovery of Dues', area:'Civil Law', pay:'PKR 25,000', deadline:'3 days'},
    {title:'Legal Opinion on Property Matter', area:'Property Law', pay:'PKR 10,000', deadline:'3 days'},
    {title:'Research on Latest Judgment', area:'Corporate Law', pay:'PKR 8,000', deadline:'2 days'},
    {title:'Draft Power of Attorney', area:'Family Law', pay:'PKR 7,000', deadline:'3 days'},
    {title:'Video Consultation — Family Law', area:'Family Law', pay:'PKR 5,000', deadline:'1 day'}
  ];
  dashStats = [
    {icon:'file', value:'12', label:'Available Tasks', cls:'teal'},
    {icon:'briefcase', value:'3', label:'Active Cases', cls:'amber'},
    {icon:'play', value:'5', label:'Upcoming Calls', cls:'purple'},
    {icon:'scale', value:'PKR 185,000', label:'Earnings This Month', cls:'navy'}
  ];
  activity = [
    {text:'New task posted: Family Law Consultation Lahore', meta:'2h ago'},
    {text:'Draft submitted: Employment Contract Review', meta:'Yesterday'},
    {text:'Consultation completed: Asad Khan', meta:'12 Nov 2025'}
  ];
  payments = [
    {amount:'PKR 25,000', status:'Awaiting Release'},
    {amount:'PKR 15,000', status:'Processing'},
    {amount:'PKR 10,000', status:'In Review · 28 Sep 2025'}
  ];
  aiTools = [
    {icon:'file', title:'AI Legal Drafting', text:'Draft petitions, notices and agreements.'},
    {icon:'search', title:'Case Law Research', text:'Search precedents across practice.'},
    {icon:'scale', title:'Legal Opinion Assistant', text:'Structure and verify legal opinions.'},
    {icon:'shield', title:'Document Analysis', text:'Analyze documents instantly.'},
    {icon:'book', title:'Citation & Reference Tool', text:'Generate citations and references.'}
  ];
  earnStats = [
    {value:'PKR 185,000', label:'Total Earnings', trend:'+12%'},
    {value:'28', label:'Completed Tasks', trend:'+18%'},
    {value:'4.8', label:'Client Rating', trend:'+0.3'},
    {value:'PKR 50,000', label:'Pending Release', trend:'+25%'}
  ];
  chart = [
    {m:'Jan', h:45},{m:'Feb', h:60},{m:'Mar', h:52},{m:'Apr', h:78},{m:'May', h:70},{m:'Jun', h:90},{m:'Jul', h:100}
  ];
  bonuses = [
    {label:'Top Rated Lawyer', amount:'+PKR 10,000'},
    {label:'High Completion Rate', amount:'+PKR 15,000'},
    {label:'Client Appreciation', amount:'+PKR 10,000'},
    {label:'Pro Bono Contribution', amount:'+PKR 5,000'}
  ];
}
