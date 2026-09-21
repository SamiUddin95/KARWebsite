import { Component, Input } from '@angular/core';

@Component({
  selector: 'legal-icon', standalone: true,
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path [attr.d]="paths[name] || paths['scale']" /></svg>`,
  styles: [':host{display:inline-flex;width:1.5em;height:1.5em;flex-shrink:0}svg{width:100%;height:100%}']
})
export class LegalIconComponent {
  @Input() name = 'scale';
  paths: Record<string, string> = {
    scale: 'M12 3v18M7 21h10M3 7h18M5 7l-4 9h8L5 7m14 0-4 9h8l-4-9M10 4h4',
    users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    user: 'M20 21v-2a7 7 0 0 0-14 0v2M13 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
    building: 'M3 10h18L12 3 3 10M5 12v7m5-7v7m4-7v7m5-7v7M2 22h20',
    book: 'M12 6C9 3 5 3 2 4v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-7-1-10 2v15',
    cap: 'M1 9l11-6 11 6-11 6L1 9m4 3v6c4 3 10 3 14 0v-6m4-3v9',
    heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
    shield: 'M12 22s9-4 9-11V5l-9-3-9 3v6c0 7 9 11 9 11m-4-11 3 3 5-6',
    file: 'M14 2H5v20h14V7l-5-5v5h5M8 12h8m-8 4h6',
    calendar: 'M4 5h16v16H4V5m3-3v6m10-6v6M4 11h16m-13 4h3m4 0h3',
    chat: 'M21 11a9 9 0 0 1-9 9H3l1.5-4A9 9 0 1 1 21 11ZM8 10h8m-8 4h5',
    arrow: 'M4 12h16m-6-6 6 6-6 6',
    check: 'M5 12l4 4L19 6',
    search: 'M21 21l-5-5M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16',
    play: 'M9 5l11 7-11 7V5',
    globe: 'M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18',
    briefcase: 'M3 7h18v14H3V7m5 0V3h8v4M3 12c6 4 12 4 18 0m-9 0v5',
    clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-15v5l3 3',
    pin: 'M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
    sparkle: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Zm7 11l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z',
    award: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3.5-1.5L7 22l5-3 5 3-1.5-8.5',
    linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-3zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    x: 'M4 4l16 16M20 4L4 20',
    facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
    youtube: 'M22 12s0-3.5-.5-5c-.3-1-1-1.7-2-2C17.5 4.5 12 4.5 12 4.5s-5.5 0-7.5.5c-1 .3-1.7 1-2 2-.5 1.5-.5 5-.5 5s0 3.5.5 5c.3 1 1 1.7 2 2 2 .5 7.5.5 7.5.5s5.5 0 7.5-.5c1-.3 1.7-1 2-2 .5-1.5.5-5 .5-5zM10 15.5v-7l6 3.5-6 3.5z'
  };
}
