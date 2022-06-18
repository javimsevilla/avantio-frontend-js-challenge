import { Component } from '@angular/core';
import { CustomBreakpointObserver } from 'src/app/layout';

@Component({
  selector: 'app-menu',
  template: `
    <app-menu-small *ngIf="isSmallScreen$ | async"></app-menu-small>
    <app-menu-medium *ngIf="isMediumScreen$ | async"></app-menu-medium>
    <app-menu-large *ngIf="isLargeScreen$ | async"></app-menu-large>
  `,
})
export class MenuContainerComponent {
  protected isSmallScreen$ = this.breakpointsObserver.isSmall$;
  protected isMediumScreen$ = this.breakpointsObserver.isMedium$;
  protected isLargeScreen$ = this.breakpointsObserver.isLarge$;

  constructor(private breakpointsObserver: CustomBreakpointObserver) {}
}
