import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-medium',
  template: `
    <a class="menu__logo" routerLink="/">
      <img src="assets/favicon_avantio.svg" alt="Icono Avantio" />
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
      <img src="assets/favicon_el_pais.svg" alt="Icono de EL PAÍS" />
    </a>

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
      <img src="assets/favicon_el_mundo.svg" alt="Icono de EL MUNDO" />
    </a>
  `,
  styleUrls: ['./menu-medium.component.scss'],
})
export class MenuMediumComponent {}
