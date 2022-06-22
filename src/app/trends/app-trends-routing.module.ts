import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TrendsListComponent } from './trends-list/trends-list.component';

const trendsRoutes: Route[] = [
  { path: 'trends', component: TrendsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(trendsRoutes)],
  exports: [RouterModule],
})
export class AppTrendsRoutingModule {}
