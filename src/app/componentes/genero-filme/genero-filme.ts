import { Component } from '@angular/core';
import { Filme } from '../filme/filme';
import { filmes } from '../../mock-filmes';

@Component({
  imports: [Filme],
  selector: 'app-genero-filme',
  styleUrl: './genero-filme.css',
  templateUrl: './genero-filme.html',
})
export class GeneroFilme {
  filme = filmes[0]
}
