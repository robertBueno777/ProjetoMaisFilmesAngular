import { Component, OnInit } from '@angular/core';
//import { GeneroFilme } from '../genero-filme/genero-filme';
import { IFilme, GeneroFilme } from '../filme/filmeInterface';
import { map } from 'rxjs';
import { filmes } from '../../mock-filmes';

@Component({
  imports: [],
  selector: 'app-listas-filmes',
  styleUrl: './listas-filmes.css',
  templateUrl: './listas-filmes.html',
})
export class ListasFilmes implements OnInit {
  generos: GeneroFilme[] = [];//ta fazendo um array de um genero de filme 
  filmesPorGeneros: Map<string, IFilme[]> = new Map();

  ngOnInit(){
    this.filmesPorGeneros = new Map();
    
    filmes.forEach((filme) => {
      const generoId = filme.genero.id 
      if(!this.filmesPorGeneros.has(generoId)){
        this.filmesPorGeneros.set(generoId, [])
      }
      this.filmesPorGeneros.get(generoId)?.push(filme);
    })
  
    this.generos = 
    [
      {
        id: 'crime',
        value: 'Crime',
        filmes: (this.filmesPorGeneros.get("crime") ?? []) as any,
      },
      {
        id: 'drama',
        value: 'Drama',
        filmes: (this.filmesPorGeneros.get("drama") ?? []) as any,
      },
      {
        id: 'comedia',
        value: 'Comedia',
        filmes: (this.filmesPorGeneros.get("comedia") ?? []) as any,
      },
      {
        id: 'terror',
        value: 'Terror',
        filmes: (this.filmesPorGeneros.get("terror") ?? []) as any,
      },
      {
        id: 'acao',
        value: 'Acao',
        filmes: (this.filmesPorGeneros.get("acao") ?? []) as any,
      },


    ]
    console.log(this.filmesPorGeneros)
  }

}
