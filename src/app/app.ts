import { Component, signal } from '@angular/core';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { ListasFilmes } from './componentes/listas-filmes/listas-filmes';
import { GeneroFilme } from './componentes/genero-filme/genero-filme';

@Component({
  imports: [Cabecalho, Rodape, ListasFilmes, GeneroFilme],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mais-filmes-angular');
}
