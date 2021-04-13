import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Postagem } from 'src/app/models/Postagem';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

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

  key = 'dataPostagem'
  reverse = true

  // Variaveis para validaçõa de nova postagem
  textoValido = false
  imagemValida = false

  constructor(
    private postagemService: PostagemService,
    private authService: AuthService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.listarCategorias()
    this.listarPostagens()
  }

  validaTexto(event: any) {
    this.textoValido = this.validar(event.target.value.length < 4 || event.target.value.length > 255, event)
  }

  validaImagem(event: any) {
    let regex = /\.(jpe?g|png)$/i
    this.imagemValida = this.validar(!regex.test(event.target.value), event)
  }

  limparValidacoes() {
    this.textoValido = false
    this.imagemValida = false
    let texto = document.querySelector('#texto')
    texto?.classList.remove('is-valid')
    let imagem = document.querySelector('#imagemUrl')
    imagem?.classList.remove('is-valid')
  }

  validar(condicao: boolean, event: any) {
    let valido = false
    if (condicao) {
      event.target.classList.remove("is-valid")
      event.target.classList.add("is-invalid")
    } else {
      event.target.classList.remove("is-invalid")
      event.target.classList.add("is-valid")
      valido = true
    }
    return valido
  }

  listarPostagens() {
    this.postagemService.findAll().subscribe((resp: Postagem[]) => {
      this.postagens = resp
      let all = document.querySelector('#todasPostagens')
      all?.classList.add('btn-verde-ativo')
    })
  }

  listarCategorias() {
    this.categoriaService.findAll().subscribe((resp: Categoria[]) => {
      this.categorias = resp
    })
  }

  publicarP() {
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagem.contatoUrl = this.emailUsuario

    let tipoPostagem = (document.querySelector('#tipoPostagemP') as HTMLInputElement).value
    this.postagem.tipoPostagem = tipoPostagem

    if(this.textoValido && this.imagemValida) {
      this.postagemService.create(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        Swal.fire({
          icon: 'success',
          title: 'Muito bom',
          text: 'Postagem realizada com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
        this.postagem = new Postagem()
        this.limparValidacoes()
        this.listarPostagens()
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Preencha os campos corretamente',
        showConfirmButton: false,
        timer: 2000
      })
    }

    
  }

  publicarO() {
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagem.contatoUrl = this.emailUsuario

    let tipoPostagem = (document.querySelector('#tipoPostagemO') as HTMLInputElement).value
    this.postagem.tipoPostagem = tipoPostagem

    if(this.textoValido && this.imagemValida) {
      this.postagemService.create(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        Swal.fire({
          icon: 'success',
          title: 'Muito bom',
          text: 'Postagem realizada com sucesso',
          showConfirmButton: false,
          timer: 1500
        })
        this.postagem = new Postagem()
        this.limparValidacoes()
        this.listarPostagens()
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Preencha os campos corretamente',
        showConfirmButton: false,
        timer: 2000
      })
    }

    
  }

  findByIdUser() {
    this.authService.findById(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
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

  verContato(nome: string, contato: string) {
    Swal.fire(
      'Obrigado por ajudar o próximo',
      'Você pode entrar em contato com ' + nome + ' através do email: ' + contato,
      'info'
    )
  }
}
