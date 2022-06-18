import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSmallComponent } from './menu-small/menu-small.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { AppLayoutModule } from '../layout';

@NgModule({
  declarations: [MenuContainerComponent, MenuSmallComponent],
  imports: [CommonModule, AppLayoutModule],
  exports: [MenuContainerComponent],
})
export class AppMenuModule {}
