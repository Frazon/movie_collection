import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Buscar Filmes</a>
      <a routerLink="/collection">Minha Coleção</a>
    </nav>

    <router-outlet />
  `,
  styles: [`
    nav {
      padding: 16px;
      display: flex;
      gap: 16px;
      background: #eee;
    }

    a {
      text-decoration: none;
      font-weight: bold;
    }
  `]
})
export class AppComponent {}
