import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <img src="assets/aTrendsPRO.svg" alt="Logo Avantio Trends PRO" />
      <app-menu></app-menu>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
