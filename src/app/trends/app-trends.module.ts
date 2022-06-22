import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TrendsListComponent } from './trends-list/trends-list.component';
import { AppTrendsRoutingModule } from './app-trends-routing.module';
import { trendsFeatureKey, trendsReducer } from './store/reducers';
import { trendsEffects } from './store/effects';
import { TrendService } from './trend.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [TrendsListComponent],
  imports: [
    CommonModule,
    AppTrendsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(trendsFeatureKey, trendsReducer),
    EffectsModule.forFeature(trendsEffects),
  ],
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
