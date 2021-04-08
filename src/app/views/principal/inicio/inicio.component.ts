import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Postagem } from 'src/app/models/Postagem';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  postagens: Postagem[]

  idUsuario = environment.id
  emailUsuario = environment.email
  usuario: Usuario = new Usuario()

  categoria: Categoria = new Categoria()
  categorias: Categoria[]
  idCategoria: number 

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private categoriaService: CategoriaService
  ) { }
  ngOnInit()  { 
    this.listarPostagens()
    this.listarCategorias()
    console.log(this.listarPostagens())
  }

  listarPostagens() {
    this.postagemService.findAll().subscribe((resp: Postagem[]) => {
      this.postagens = resp
    })
  }

  publicar() {
    this.categoria.id = this.idCategoria 
    this.postagem.categoria = this.categoria

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagem.contatoUrl = this.emailUsuario

    this.postagemService.create(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso')
      this.postagem = new Postagem()
      this.listarPostagens()
    })

    console.log(this.postagem)
  }
  findByIdUser() {
    this.authService.findById(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp 
    })
  }

  verificaTipoPostagem(event:any) {
    this.postagem.tipoPostagem = event.target.value
  }

  listarCategorias() {
    this.categoriaService.findAll().subscribe((resp: Categoria[]) => {
      this.categorias = resp
    })
  }
  getCategoria() {
    this.categoriaService.findById(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }
}
