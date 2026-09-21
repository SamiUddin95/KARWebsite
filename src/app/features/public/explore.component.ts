import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LegalIconComponent } from '../../shared/components/legal-icon/legal-icon.component';

@Component({
  selector: 'kar-explore',
  standalone: true,
  imports: [RouterLink, LegalIconComponent],
  template: `
    <section class="explore">
      <div class="intro">
        <a routerLink="/" class="back">← Back to home</a>
        <p class="eyebrow">DIGITAL LAW FIRM</p>
        <h1>{{ technology ? 'AI & Technology' : 'Resources' }}</h1>
        <p class="description">{{ technology ? 'Explore a more connected way to manage your legal journey.' : 'Find your next step, build your knowledge, and get answers to your questions.' }}</p>
      </div>
      <div class="cards">
        @for(card of cards; track card.title) {
          <a [routerLink]="card.route" class="card">
            <legal-icon [name]="card.icon"/>
            <h2>{{card.title}}</h2>
            <p>{{card.description}}</p>
            <span>{{card.action}} <legal-icon name="arrow"/></span>
          </a>
        }
      </div>
      @if(technology) {
        <div class="ai-note"><div><p class="eyebrow">LOOKING AHEAD</p><h2>AI-assisted legal tools</h2><p>Interested in AI for your legal practice? Contact our team to discuss your needs and learn about availability.</p></div><a routerLink="/contact">Talk to our team →</a></div>
      }
    </section>
  `,
  styles: [`
    :host{display:block;background:#f8f8f3;color:#17364d;min-height:70vh}
    .explore{max-width:1280px;margin:auto;padding:52px 32px 72px}
    .back{font-size:12px;color:#6c7c86}.eyebrow{font-size:10px;letter-spacing:2px;color:#a1824a;margin:32px 0 15px}
    h1{font:500 clamp(36px,5vw,60px)/1.15 Georgia,serif;color:#12334b;margin-bottom:20px}
    .description{font-size:15px;max-width:610px;color:#657c8b}
    .cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:40px}
    .card{padding:28px;background:white;border:1px solid #dde5e6;border-radius:8px;display:flex;flex-direction:column;color:#17364d;transition:transform .2s}
    .card:hover{transform:translateY(-3px);border-color:#bba270}.card>legal-icon{font-size:26px;color:#b09050;margin-bottom:24px}
    h2{font:500 24px/1.2 Georgia,serif;color:#17364d;margin-bottom:15px}.card p{font-size:12px;color:#6b818f;margin-bottom:28px}
    .card>span{display:flex;gap:12px;align-items:center;font-size:11px;font-weight:600;margin-top:auto}.card>span legal-icon{font-size:11px}
    .ai-note{display:flex;align-items:center;justify-content:space-between;gap:32px;background:#082b43;color:#c3d1db;padding:32px;border-radius:8px;margin-top:28px}
    .ai-note .eyebrow{margin-top:0;color:#d2b477}.ai-note h2{color:#fff}.ai-note p:not(.eyebrow){font-size:13px;max-width:650px}.ai-note>a{color:#e2c68f;font-size:12px;white-space:nowrap}
    @media(max-width:900px){.cards{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:520px){.explore{padding:35px 20px 50px}.cards{grid-template-columns:1fr}.ai-note{align-items:start;flex-direction:column;padding:25px}}
    @media(prefers-reduced-motion:reduce){.card{transition:none}}
  `]
})
export class ExploreComponent {
  readonly technology = inject(ActivatedRoute).snapshot.data['technology'] === true;
  readonly cards = this.technology ? [
    {icon:'briefcase',title:'Your legal workspace',description:'Access your account to organize your cases and appointments.',route:'/auth/login',action:'Open your portal'},
    {icon:'search',title:'Court case tracking',description:'Explore the court case section for your legal matters.',route:'/courts',action:'Explore court cases'},
    {icon:'file',title:'Document workspace',description:'Sign in to access the documents section of your client portal.',route:'/client/documents',action:'Access documents'},
    {icon:'chat',title:'Connected consultations',description:'Find a legal professional and take the next step in your legal journey.',route:'/lawyers',action:'Find a lawyer'}
  ] : [
    {icon:'book',title:'Legal learning',description:'Explore the courses section and continue building your legal knowledge.',route:'/courses',action:'Explore courses'},
    {icon:'scale',title:'Practice areas',description:'Explore areas of law to help you find the right expertise.',route:'/practice-areas',action:'View practice areas'},
    {icon:'chat',title:'Help & FAQs',description:'Visit our help section for questions about the platform.',route:'/faq',action:'Visit help centre'},
    {icon:'users',title:'Talk to our team',description:'Need help finding your way? Get in touch with the Digital Law Firm team.',route:'/contact',action:'Contact us'}
  ];
}
