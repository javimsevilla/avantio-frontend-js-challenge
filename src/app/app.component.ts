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
      <div class="app-current-date">
        <span>{{ currentDate | date: 'dd MMMM yyyy' }}</span>
      </div>
      <app-menu></app-menu>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentDate = new Date();
  isSmallScreen$ = this.breakpointsObserver.isSmall$;

  constructor(private breakpointsObserver: CustomBreakpointObserver) {}
}
