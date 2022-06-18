import { Component } from '@angular/core';
import { CustomBreakpointObserver } from 'src/app/layout';

@Component({
  selector: 'app-menu',
  template: ` <app-menu-small *ngIf="isSmall$ | async"></app-menu-small> `,
})
export class MenuContainerComponent {
  protected isSmall$ = this.breakpointsObserver.isSmall$;
  protected isMedium$ = this.breakpointsObserver.isMedium$;
  protected isLarge$ = this.breakpointsObserver.isLarge$;

  constructor(private breakpointsObserver: CustomBreakpointObserver) {}
}
