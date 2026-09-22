import { Component, input } from '@angular/core';
import { Filme } from '../filme/filme';
import { GeneroFilmeInterface } from '../filme/filmeInterface';
import { CommonModule } from '@angular/common';


@Component({
  imports: [Filme, CommonModule],
  selector: 'app-genero-filme',
  styleUrl: './genero-filme.css',
  templateUrl: './genero-filme.html',
})
export class GeneroFilme {
  genero = input.required<GeneroFilmeInterface>();
  
}
