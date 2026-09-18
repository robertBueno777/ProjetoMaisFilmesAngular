import { ListasFilmes } from "../listas-filmes/listas-filmes";
import { Filme } from "./filme";

export interface IFilme {
    titulo: string;
    autoria: string;
    favorito: boolean;
    genero: GeneroFilme;
    imagem: string;
}

export interface GeneroFilme{
    id: string;
    value: string;
    filmes: Filme[]
}