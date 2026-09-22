import { Component, input } from '@angular/core';
import { IFilme } from './filmeInterface'
import { CommonModule } from '@angular/common';


@Component({
  imports: [CommonModule],
  selector: 'app-filme',
  styleUrl: './filme.css',
  templateUrl: './filme.html',
})
export class Filme {

  filme = input.required<IFilme>();
  
  alternarFavorito(){
    this.filme().favorito = !this.filme().favorito;
  }
}
