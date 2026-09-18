import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-livro',
  styleUrl: './livro.css',
  templateUrl: './livro.html',
})
export class Livro {
  livro = {
    titulo: "Scarface",
    autoria: "Brian De Palma"
  }
}
