import { Component } from '@angular/core';
import { CustomBreakpointObserver } from './layout';

@Component({
  selector: 'app-root',
  template: `
    <header class="app-header">
      <img
        *ngIf="isSmallScreen$ | async"
        class="app-logo"
        src="assets/aTrendsPRO.svg"
        alt="Logo Avantio Trends PRO"
      />
      <div class="app-current-date">
        <span>{{ currentDate | date: 'dd MMMM yyyy' }}</span>
      </div>
    </header>
    <nav class="app-navigation">
      <app-menu-small *ngIf="isSmallScreen$ | async"></app-menu-small>
      <app-menu-medium *ngIf="isMediumScreen$ | async"></app-menu-medium>
      <app-menu-large *ngIf="isLargeScreen$ | async"></app-menu-large>
    </nav>
    <main class="app-main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentDate = new Date();
  isSmallScreen$ = this.breakpointsObserver.isSmall$;
  isMediumScreen$ = this.breakpointsObserver.isMedium$;
  isLargeScreen$ = this.breakpointsObserver.isLarge$;

  constructor(private breakpointsObserver: CustomBreakpointObserver) {}
}
