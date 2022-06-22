import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-large',
  template: `
    <a routerLink="/">
      <img
        class="menu__logo"
        src="assets/aTrendsPRO.svg"
        alt="Logo Avantio Trends PRO"
      />
    </a>

    <div class="menu__trends-counter">
      <span class="trends-counter__label">Hoy</span>
      <span class="trends-counter__count">132 Noticias</span>
    </div>

    <a
      [routerLink]="['/trends', { provider: 'elpais' }]"
      routerLinkActive="router-link-active"
      [routerLinkActiveOptions]="{
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact'
      }"
      class="menu__option"
    >
      <img src="assets/El_Pais.svg" alt="Logo de EL PAÍS" />
    </a>

    <a
      [routerLink]="['/trends', { provider: 'elmundo' }]"
      routerLinkActive="router-link-active"
      [routerLinkActiveOptions]="{
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact'
      }"
      class="menu__option"
    >
      <img src="assets/El_Mundo.svg" alt="Logo de EL MUNDO" />
    </a>

    <span class="menu__copyright">Copyright © 2018 Avantio Trends</span>
  `,
  styleUrls: ['./menu-large.component.scss'],
})
export class MenuLargeComponent {}
