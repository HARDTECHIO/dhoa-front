import { Postagem } from './Postagem';

export class Categoria {
  public id: number
  public nome: string
  public descricao: string
  public icone: string
  public postagens: Postagem[]
}
