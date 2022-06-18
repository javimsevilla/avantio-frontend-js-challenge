import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-large',
  template: `
    <nav class="menu">
      <img
        class="menu__logo"
        src="assets/aTrendsPRO.svg"
        alt="Logo Avantio Trends PRO"
      />

      <div class="menu__trends-counter">
        <span class="trends-counter__label">Hoy</span>
        <span class="trends-counter__count">132 Noticias</span>
      </div>

      <button type="button" class="menu__option">
        <img src="assets/El_Pais.svg" alt="Logo de EL PAÍS" />
      </button>

      <button type="button" class="menu__option">
        <img src="assets/El_Mundo.svg" alt="Logo de EL MUNDO" />
      </button>

      <span class="menu__copyright">Copyright © 2018 Avantio Trends</span>
    </nav>
  `,
  styleUrls: ['./menu-large.component.scss'],
})
export class MenuLargeComponent {}
