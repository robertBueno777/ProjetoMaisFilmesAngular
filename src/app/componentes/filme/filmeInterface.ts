import { ListasFilmes } from "../listas-filmes/listas-filmes";
import { Filme } from "./filme";

export interface IFilme {
    titulo: string;
    autoria: string;
    favorito: boolean;
    genero: GeneroFilmeInterface;
    imagem: string;
}

export interface GeneroFilmeInterface{
    id: string;
    value: string;
    filmes: IFilme[]
}