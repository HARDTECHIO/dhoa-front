import { Postagem } from './Postagem';
import { Usuario } from './Usuario';
export class Categoria{
  public id: number
  public nome: string
  public descricao: string
  public icone: string
  public postagens: Postagem[]
}
