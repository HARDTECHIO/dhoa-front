import { Postagem } from './Postagem';
export class Usuario {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public imagemUrl: string;
  public tipoUsuario: string;
  public postagens: Postagem[]
}
