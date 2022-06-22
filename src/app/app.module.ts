import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { LOCALE_ID, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppProgressBarComponent } from './app-progress-bar.component';
import { AppLayoutModule } from './layout';
import { AppMenuModule } from './menu';
import { reducers, metaReducers } from './store/reducers';
import { rootEffects } from './store/effects';
import { AppTrendsModule } from './trends';
import { buildSpecificModules } from './build-specifics';
import { httpInterceptorProviders } from './app-http-interceptors';
import { AppPageNotFoundComponent } from './app-page-not-found.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    AppProgressBarComponent,
    AppPageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppTrendsModule,
    AppRoutingModule,
    AppLayoutModule,
    AppMenuModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot(rootEffects),
    StoreRouterConnectingModule.forRoot(),
    buildSpecificModules,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
