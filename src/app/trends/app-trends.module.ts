import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendsListComponent } from './trends-list/trends-list.component';

@NgModule({
  declarations: [TrendsListComponent],
  imports: [CommonModule],
  exports: [TrendsListComponent],
})
export class AppTrendsModule {}
