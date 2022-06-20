import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendsListComponent } from './trends-list/trends-list.component';
import { AppTrendsRoutingModule } from './app-trends-routing.module';
import { TrendService } from './trend.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [TrendsListComponent],
  imports: [CommonModule, AppTrendsRoutingModule, HttpClientModule],
  exports: [TrendsListComponent],
  providers: [
    TrendService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppTrendsModule {}
