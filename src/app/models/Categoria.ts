import { Postagem } from './Postagem';
import { Usuario } from './Usuario';
export class Categorias{
  public id: number
  public nome: string
  public descricao: string
  public icone: string
  public postagens: Postagem[]
}
