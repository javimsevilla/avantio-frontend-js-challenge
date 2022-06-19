import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-small',
  template: `
    <button type="button" class="menu__option">
      <img src="assets/favicon_el_pais.svg" alt="Icono de EL PAÍS" />
    </button>
    <button type="button" class="menu__option">
      <img src="assets/favicon_el_mundo.svg" alt="Icono de EL MUNDO" />
    </button>
  `,
  styleUrls: ['./menu-small.component.scss'],
})
export class MenuSmallComponent {}
