import { registerLocaleData } from '@angular/common';
import { DebugElement, LOCALE_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import localeEs from '@angular/common/locales/es';

import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout';
import { AppMenuModule } from './menu';
import { provideMockStore } from '@ngrx/store/testing';

registerLocaleData(localeEs, 'es');

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppLayoutModule, AppMenuModule],
      declarations: [AppComponent],
      providers: [{ provide: LOCALE_ID, useValue: 'es' }, provideMockStore()],
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
    component.currentDate = new Date('2022-06-20').getTime();

    fixture.detectChanges();
    const spanDebugElement = fixture.debugElement.query(
      By.css('.app-current-date > span')
    );
    const span: HTMLElement = spanDebugElement.nativeElement;

    expect(span.textContent).toBe('20 junio 2022');
  });

  describe('Menu', () => {
    let fixture: ComponentFixture<AppComponent>;
    let getMenuSmallDebugElement: () => DebugElement;
    let getMenuMediumDebugElement: () => DebugElement;
    let getMenuLargeDebugElement: () => DebugElement;

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);

      getMenuSmallDebugElement = () =>
        fixture.debugElement.query(By.css('app-menu-small'));

      getMenuMediumDebugElement = () =>
        fixture.debugElement.query(By.css('app-menu-medium'));

      getMenuLargeDebugElement = () =>
        fixture.debugElement.query(By.css('app-menu-large'));
    });

    afterEach(() => {
      viewport.reset();
    });

    it('should render <app-menu-small> for small screens', () => {
      viewport.set('small-screen');

      fixture.detectChanges();

      expect(getMenuSmallDebugElement()).toBeTruthy();
      expect(getMenuMediumDebugElement()).toBeFalsy();
      expect(getMenuLargeDebugElement()).toBeFalsy();
    });

    it('should render <app-menu-medium> for medium screens', () => {
      viewport.set('medium-screen');

      fixture.detectChanges();

      expect(getMenuSmallDebugElement()).toBeFalsy();
      expect(getMenuMediumDebugElement()).toBeTruthy();
      expect(getMenuLargeDebugElement()).toBeFalsy();
    });

    it('should render <app-menu-large> for large screens', () => {
      viewport.set('large-screen');

      fixture.detectChanges();

      expect(getMenuSmallDebugElement()).toBeFalsy();
      expect(getMenuMediumDebugElement()).toBeFalsy();
      expect(getMenuLargeDebugElement()).toBeTruthy();
    });
  });
});
