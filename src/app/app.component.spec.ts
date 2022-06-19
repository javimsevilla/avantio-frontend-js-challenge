import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import localeEs from '@angular/common/locales/es';

import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout';
import { AppMenuModule } from './menu';

registerLocaleData(localeEs, 'es');

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppLayoutModule, AppMenuModule],
      declarations: [AppComponent],
      providers: [{ provide: LOCALE_ID, useValue: 'es' }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render current date', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.currentDate = new Date('2022-06-20');

    fixture.detectChanges();
    const spanDebugElement = fixture.debugElement.query(
      By.css('.app-current-date > span')
    );
    const span: HTMLElement = spanDebugElement.nativeElement;

    expect(span.textContent).toBe('20 junio 2022');
  });
});
