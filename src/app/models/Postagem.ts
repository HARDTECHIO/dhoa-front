import { Usuario } from './Usuario';
import { Categorias } from './Categoria';

export class Postagem{
  public id: number
  public tipoPostagem: string
  public texto: string
  public imagemUrl: string
  public contatoUrl: string
  public dataPostagem: Date
  public categoria: Categorias
  public usuario: Usuario
}
