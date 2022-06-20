import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { LOCALE_ID, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout';
import { AppMenuModule } from './menu';
import { reducers, metaReducers } from './store/reducers';
import { rootEffects } from './store/effects';
import { AppTrendsModule } from './trends';
import { buildSpecificModules } from './build-specifics';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    AppMenuModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot(rootEffects),
    AppTrendsModule,
    ...buildSpecificModules,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
