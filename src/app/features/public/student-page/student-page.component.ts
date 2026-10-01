import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LegalIconComponent } from '@shared/components/legal-icon/legal-icon.component';

@Component({
  selector: 'kar-student-page',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss', './student-banner.component.scss']
})
export class StudentPageComponent {
  heroStats = [
    {icon:'book', label:'Expert-Led Programs'},
    {icon:'briefcase', label:'Real-World Experience'},
    {icon:'award', label:'Career Opportunities'}
  ];
  lapMenu = [
    {icon:'grid', label:'Dashboard', active:true},
    {icon:'book', label:'Courses'},
    {icon:'briefcase', label:'Internships'},
    {icon:'sparkle', label:'AI Assistant'},
    {icon:'users', label:'Community'},
    {icon:'award', label:'Certificates'},
    {icon:'calendar', label:'Earnings'},
    {icon:'user', label:'Profile'}
  ];
  lapRows = [
    {title:'Constitutional Law — Lecture 4', sub:'Continue Learning', amt:'68%'},
    {title:'Legal Drafting Assignment', sub:'Due Friday', amt:'New'},
    {title:'Internship: High Court Cell', sub:'Application', amt:'Applied'}
  ];
  journey = [
    {icon:'book', title:'Learn', text:'Build your legal foundation'},
    {icon:'edit', title:'Practice', text:'Develop real skills'},
    {icon:'award', title:'Certify', text:'Earn verifiable credentials'},
    {icon:'briefcase', title:'Intern', text:'Gain practical experience'},
    {icon:'users', title:'Refer', text:'Earn credits & social impact'},
    {icon:'card', title:'Earn', text:'Generate income (PKR)'},
    {icon:'scale', title:'Experience', text:'Work on real cases'},
    {icon:'cap', title:'Career', text:'Become a professional'}
  ];
  joinStats = [
    {icon:'users', value:'5,000+', label:'Registered Students'},
    {icon:'building', value:'500+', label:'Partner Law Firms'},
    {icon:'user', value:'100+', label:'Expert Instructors'},
    {icon:'sparkle', value:'A Stronger', label:'Pakistan'}
  ];
  why = [
    {icon:'book', tag:'LEARN', title:'Learn', text:'Comprehensive courses on Pakistani law, taught by expert lawyers.', caption:'From theory to deep understanding.', img:'assets/images/study.png'},
    {icon:'scale', tag:'PRACTICE', title:'Practice', text:'Case studies, drafting exercises and legal simulations.', caption:'Sharpen your practical skills.', img:'assets/images/legalhelp.jpg'},
    {icon:'award', tag:'CERTIFY', title:'Certify', text:'Earn verifiable certificates to showcase your skills.', caption:'Stand out with real credentials.', img:'assets/images/Reaches.jpg'},
    {icon:'briefcase', tag:'INTERN', title:'Intern', text:'Access verified internship opportunities with law firms & organizations.', caption:'Bridge learning with real practice.', img:'assets/images/man.png'},
    {icon:'sparkle', tag:'AI ASSISTANT', title:'AI Assistant', text:'Your 24/7 legal learning and research assistant.', caption:'All that understands Pakistan law.', img:'assets/images/girl.png'},
    {icon:'card', tag:'EARN', title:'Earn', text:'Earn through our referral program and special projects.', caption:'Learn, contribute, and earn.', img:'assets/images/karachi-legal.jpg'}
  ];
  startChecks = ['Easy Registration','Access to Free Resources','Verified Certificates','Internship Opportunities'];
  dashTiles: {icon:string;label:string;value:string;sub:string;prog?:number}[] = [
    {icon:'book', label:'Courses in Progress', value:'3 /6', sub:'courses', prog:50},
    {icon:'award', label:'Certificates Earned', value:'2', sub:'certificates'},
    {icon:'briefcase', label:'Internship Applications', value:'4', sub:'applied · 1 shortlisted'},
    {icon:'clock', label:'Learning Hours', value:'28', sub:'hours · This Month'}
  ];
  programs = [
    {img:'assets/images/SupremeCourt.png', title:'Constitutional Law of Pakistan', lessons:'12 Lessons', price:'PKR 5,000'},
    {img:'assets/images/legalhelp.jpg', title:'Civil Procedure (Code, 1908)', lessons:'10 Lessons', price:'PKR 4,000'},
    {img:'assets/images/karachi-legal.jpg', title:'Legal Drafting & Documentation', lessons:'8 Lessons', price:'PKR 4,000'},
    {img:'assets/images/Reaches.jpg', title:'Corporate & Commercial Law', lessons:'14 Lessons', price:'PKR 6,000'}
  ];
  tabs = ['All','Core Law','Practical Skills','Certifications','Short Courses'];
  aiChips = ['Explain Article 9 of the Constitution','Draft a legal notice','Summarize a Supreme Court judgment','Compare civil vs criminal procedure'];
  aiSources = ['Supreme Court Judgments','High Court Cases','Pakistani Laws & Acts','Legal Articles & Commentary','Drafting Templates'];
  trainingChecks = ['Case studies from real scenarios','Legal drafting exercises','Moot simulations','Client consultation role-plays'];
  internships = [
    {org:'Latif & Partners', role:'Interns — Legal Research', city:'Karachi', months:'3 months'},
    {org:'High Court Legal Aid Cell', role:'Interns — Case Support', city:'Lahore', months:'2 months'},
    {org:'Corporate Legal Department', role:'Interns — Compliance', city:'Islamabad', months:'3 months'}
  ];
  certChecks = ['QR Verified','Share on LinkedIn','Employer Checks','Build Your Profile'];
  referralStats = [
    {value:'14', label:'Friends Referred'},
    {value:'9', label:'Active Students'},
    {value:'PKR 1,000', label:'Per Successful Signup'}
  ];
  bottomCards = [
    {icon:'scale', label:'Specialization Preparation Track', title:'Student Case Experience', text:'Study real cases with expert supervision.', checks:['Case briefs & analyses','Peer discussions','Mentor feedback sessions'], cta:'Refer & Earn Now', img:'assets/images/girl.png'},
    {icon:'file', label:'', title:'Career Profile & CV Builder', text:'Turn learning into career-ready profile.', checks:['Create your legal CV','Portfolio of certificates & skills','Get matched to top law firms'], cta:'Create My Profile', img:'assets/images/man.png'},
    {icon:'users', label:'', title:'Community, Events & Opportunities', text:'Grow your network. Learn. Lead.', checks:['Live webinars with judges & senior lawyers','Moots, discussions & peer support','Scholarships & opportunities'], cta:'Explore Events & Community', img:'assets/images/karachi-legal.jpg'}
  ];
}

