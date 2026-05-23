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
      <a routerLink="/scanner">Scanner</a>
    </nav>

    <router-outlet />
  `,
  styles: [`
  nav {
    padding: 16px;
    display: flex;
    gap: 12px;
    background: #1976d2;
    align-items: center;
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
  }

  a:hover {
    background: rgba(255,255,255,0.15);
  }
`]
})
export class AppComponent {}
