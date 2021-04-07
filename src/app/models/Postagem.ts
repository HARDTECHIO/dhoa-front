import { Usuario } from './Usuario';
import { Categoria } from './Categoria';

export class Postagem {
  public id: number
  public tipoPostagem: string
  public texto: string
  public imagemUrl: string
  public contatoUrl: string
  public dataPostagem: Date
  public categoria: Categoria
  public usuario: Usuario
}
