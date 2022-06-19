import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-medium',
  template: `
    <img
      class="menu__logo"
      src="assets/favicon_avantio.svg"
      alt="Icono Avantio"
    />

    <button type="button" class="menu__option">
      <img src="assets/favicon_el_pais.svg" alt="Icono de EL PAÍS" />
    </button>

    <button type="button" class="menu__option">
      <img src="assets/favicon_el_mundo.svg" alt="Icono de EL MUNDO" />
    </button>
  `,
  styleUrls: ['./menu-medium.component.scss'],
})
export class MenuMediumComponent {}
