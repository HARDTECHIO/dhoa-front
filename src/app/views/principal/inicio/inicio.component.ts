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

  tipos = 'pedindo oferecendo'

  key="dataPostagem"
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private categoriaService: CategoriaService
  ) { }
  ngOnInit() {
    this.listarCategorias()
    this.listarPostagens()
  }

  listarPostagens() {
    this.postagemService.findAll().subscribe((resp: Postagem[]) => {
      this.postagens = resp
      let all = document.querySelector('#todasPostagens')
      all?.classList.add('btn-verde-ativo')
    })
  }

  publicar() {
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagem.contatoUrl = this.emailUsuario

    let tipoPostagem = (document.querySelector('#tipoPostagem') as HTMLInputElement).value
    this.postagem.tipoPostagem = tipoPostagem

    this.postagemService.create(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso')
      this.postagem = new Postagem()
      this.listarPostagens()
    })
  }
  findByIdUser() {
    this.authService.findById(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
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

  filtrarPostagens() {
    this.postagemService.findAll().subscribe((resp: Postagem[]) => {
      this.postagens = resp
      this.limparFiltros()
      let all = document.querySelector('#todasPostagens')
      all?.classList.add('btn-verde-ativo')
    })
  }

  filtrarTipo(tipo: string) {
    this.postagemService.findAllByTipo(tipo).subscribe((resp: Postagem[]) => {
      this.postagens = resp
      this.limparFiltros()
      let btn = document.querySelector('#' + tipo)
      btn?.classList.add('btn-verde-ativo')
    })
  }

  filtrarCategoria(id: number, nome: string) {
    this.postagemService.findAllByCategoriaId(id).subscribe((resp: Postagem[]) => {
      this.postagens = resp
      this.limparFiltros()
      let btn = document.querySelector('#' + nome)
      btn?.classList.add('btn-verde-ativo')
    })
  }

  limparFiltros() {
    this.categorias.forEach(function (categoria) {
      let nome = categoria.nome
      let cat = document.querySelector('#' + nome)
      cat?.classList.remove('btn-verde-ativo')
    })

    let tipos = this.tipos.split(' ')
    for (let i = 0; i < tipos.length; i++) {
      let tipo = document.querySelector('#' + tipos[i])
      tipo?.classList.remove('btn-verde-ativo')
    }

    let all = document.querySelector('#todasPostagens')
    all?.classList.remove('btn-verde-ativo')
  }

  verificaImagem(imagem: string) {
    let res = false
    if(imagem != null) {
      res = true
    }
    return res
  }
}
