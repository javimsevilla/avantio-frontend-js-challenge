import { Component } from '@angular/core';

@Component({
  selector: 'app-app-page-not-found',
  template: `
    <h1>¡Oh, vaya! Parece que no podemos encontrar lo que buscas</h1>
    <p>Por favor, asegurate de que la dirección URL que buscas es correcta.</p>
    <a class="app-button app-button--primary" routerLink="/"
      >Volver al inicio</a
    >
  `,
  styles: [
    `
      .app-button {
        width: 100%;
      }
    `,
  ],
})
export class AppPageNotFoundComponent {}
