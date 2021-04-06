import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Postagem } from 'src/app/models/Postagem';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/service/auth.service';
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
  tipoPostagem: string

  idUsuario = environment.id
  usuario: Usuario = new Usuario()

  categoria: Categoria = new Categoria()
  categorias: Categoria[]
  idCategoria: number 

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService
  ) { }
  ngOnInit()  { 
    this.listarPostagens()
      
  }
  listarPostagens() {
    this.postagemService.findAll().subscribe((resp: Postagem[]) => {
      this.postagens = resp
    })
  }
  publicar() {
    this.postagemService.create(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso')
      this.postagem = new Postagem()
    })
  }
  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp 
    })
  }
  verificaTipoPostagem(event:any) {
    this.tipoPostagem = event.target.value
  }
  
}
