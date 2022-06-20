import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendsListComponent } from './trends-list/trends-list.component';
import { AppTrendsRoutingModule } from './app-trends-routing.module';

@NgModule({
  declarations: [TrendsListComponent],
  imports: [CommonModule, AppTrendsRoutingModule],
  exports: [TrendsListComponent],
})
export class AppTrendsModule {}
