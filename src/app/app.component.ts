import { Component } from '@angular/core';
import { CustomBreakpointObserver } from './layout';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <img
        *ngIf="isSmallScreen$ | async"
        class="app-logo"
        src="assets/aTrendsPRO.svg"
        alt="Logo Avantio Trends PRO"
      />
      <app-menu></app-menu>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSmallScreen$ = this.breakpointsObserver.isSmall$;

  constructor(private breakpointsObserver: CustomBreakpointObserver) {}
}
