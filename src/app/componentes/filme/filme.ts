import { Component } from '@angular/core';
import { IFilme } from './filmeInterface'

@Component({
  imports: [],
  selector: 'app-filme',
  styleUrl: './filme.css',
  templateUrl: './filme.html',
})
export class Filme {

  alternarFavorito(){
    this.filme.favorito = !this.filme.favorito;
  }
  
  filme : IFilme = {
    titulo: "Scarface",
    autoria: "Brian De Palma",
    favorito: false,
    genero: "Drama",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjZZFDUnfUPVnEBswougjiVO8x_rstN79-FtU-BGZHA&s=10"
  }
}
