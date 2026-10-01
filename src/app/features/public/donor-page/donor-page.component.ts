import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalIconComponent } from '@shared/components/legal-icon/legal-icon.component';

@Component({
  selector: 'kar-donor-page',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  templateUrl: './donor-page.component.html',
  styleUrl: './donor-page.component.scss'
})
export class DonorPageComponent {
  journey = [
    {icon:'file', title:'Apply', text:'Submit your application online or at a partner kiosk'},
    {icon:'search', title:'Eligibility Assessment', text:'We review your financial and legal eligibility'},
    {icon:'shield', title:'Verification', text:'Documents and details are verified'},
    {icon:'check', title:'Approval', text:'Your application is approved'},
    {icon:'user', title:'Lawyer Assigned', text:'A qualified lawyer is assigned'},
    {icon:'scale', title:'Case Management', text:'Your lawyer handles your case'},
    {icon:'award', title:'Resolution', text:'Work towards a fair outcome'}
  ];
  features = [
    {icon:'file', title:'Application', text:'Submit your legal aid application online.'},
    {icon:'card', title:'Financial Assessment', text:'Fair and transparent eligibility assessment.'},
    {icon:'download', title:'Document Upload', text:'Upload and manage supporting documents.'},
    {icon:'clock', title:'Application Tracking', text:'Track your application in real-time.'},
    {icon:'user', title:'Lawyer Assignment', text:'Get a qualified lawyer matched to your case.'},
    {icon:'grid', title:'Case Dashboard', text:'View your case details, documents and timeline.'},
    {icon:'bell', title:'Case Updates', text:'Get notified via SMS, email or portal.'},
    {icon:'play', title:'Video Consultation', text:'Meet your lawyer online.'},
    {icon:'chat', title:'Case Chat', text:'Communicate securely with your legal team.'},
    {icon:'scale', title:'Legal Team', text:'Work with experienced lawyers and partners.'},
    {icon:'heart', title:'Support & Guidance', text:'Access helplines, resources and FAQs.'},
    {icon:'globe', title:'Multilingual Access', text:'Inclusive access for all communities.'}
  ];
  amounts = [
    {value:'PKR 2,500', sub:'Support a Client'},
    {value:'PKR 5,000', sub:'Support Court Fees'},
    {value:'PKR 10,000', sub:'Sponsor a Case'},
    {value:'PKR 25,000', sub:'Larger Impact'},
    {value:'PKR 50,000', sub:'Multiple Cases'},
    {value:'Custom Amount', sub:'Choose your amount'}
  ];
  transparency = [
    {value:'PKR 150,000', label:'Total Donated', sub:'All-time donations', cls:'navy'},
    {value:'PKR 92,000', label:'Allocated', sub:'Committed to approved cases', cls:'gold'},
    {value:'PKR 78,500', label:'Utilised', sub:'Paid to lawyers & court fees', cls:'blue'},
    {value:'PKR 71,500', label:'Available Balance', sub:'Ready for new cases', cls:'green'}
  ];
  impactStats = [
    {icon:'users', value:'14', label:'Lives Affected', sub:'All time'},
    {icon:'play', value:'8', label:'Active Cases', sub:'in progress'},
    {icon:'check', value:'6', label:'Completed Cases', sub:'Successfully resolved'},
    {icon:'heart', value:'100%', label:'Got Justice', sub:'Every rupee makes a difference'}
  ];
  ledger = [
    {date:'04 May 2024', desc:'Donation — Individual Donor', type:'Credit', amount:'35,000', balance:'71,500'},
    {date:'12 May 2024', desc:'Payment — Lawyer Fee LA-2024-0032', type:'Debit', amount:'-25,000', balance:'46,500'},
    {date:'10 May 2024', desc:'Donation — Corporate Partner', type:'Credit', amount:'50,000', balance:'96,500'},
    {date:'08 May 2024', desc:'Court Fee — Civil Case LA-2024-0013', type:'Debit', amount:'-7,000', balance:'36,500'},
    {date:'01 May 2024', desc:'Donation — Individual Donor', type:'Credit', amount:'35,000', balance:'71,500'}
  ];
  cases = [
    {id:'LA-2024-0077', type:'Property Dispute', loc:'Lahore', status:'Active', aid:'105,000'},
    {id:'LA-2024-0016', type:'Family Law (Khula)', loc:'Karachi', status:'Active', aid:'85,000'},
    {id:'LA-2024-0015', type:'Labour Rights', loc:'Faisalabad', status:'Completed', aid:'65,000'},
    {id:'LA-2024-0014', type:'Domestic Violence', loc:'Islamabad', status:'Active', aid:'70,000'},
    {id:'LA-2024-0013', type:'Child Custody', loc:'Multan', status:'Completed', aid:'90,000'}
  ];
  canSee = ['Anonymised case IDs','Case type & location (city only)','Amount of legal aid given','Case status (active/completed)','Overall impact statistics','Fund activity and running balance'];
  cannotSee = ['Applicant names or CNIC','Personal contact details','Exact case documents','Sensitive personal information','Identities of beneficiaries','Details that could compromise safety'];
  ecosystem = [
    {icon:'heart', title:'Donor', text:'You give with purpose', cls:'maroon'},
    {icon:'building', title:'Legal Aid Fund', text:'Pool for approved cases', cls:'gold'},
    {icon:'user', title:'Qualified Applicant', text:'Verified & approved', cls:'blue'},
    {icon:'briefcase', title:'Lawyer Assigned', text:'Justice access & representation', cls:'navy'},
    {icon:'scale', title:'Case Progress', text:'Towards a just outcome', cls:'green'},
    {icon:'play', title:'Donor Transparency', text:'You see the real impact', cls:'dark'}
  ];
}
