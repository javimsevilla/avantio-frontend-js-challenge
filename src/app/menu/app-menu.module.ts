import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSmallComponent } from './menu-small/menu-small.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { AppLayoutModule } from '../layout';
import { MenuMediumComponent } from './menu-medium/menu-medium.component';
import { MenuLargeComponent } from './menu-large/menu-large.component';

@NgModule({
  declarations: [
    MenuContainerComponent,
    MenuSmallComponent,
    MenuMediumComponent,
    MenuLargeComponent,
  ],
  imports: [CommonModule, AppLayoutModule],
  exports: [MenuContainerComponent],
})
export class AppMenuModule {}
