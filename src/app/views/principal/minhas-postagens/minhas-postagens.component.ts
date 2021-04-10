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
  selector: 'app-minhas-postagens',
  templateUrl: './minhas-postagens.component.html',
  styleUrls: ['./minhas-postagens.component.css'],
})
export class MinhasPostagensComponent implements OnInit {
  
  postagens: Postagem[]

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  categorias: Categoria[]
  
  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    private authService: AuthService
  ) {}

  ngOnInit() {

    this.getUsuario()
    console.log(environment.token)
  }


  getUsuario(){
    this.authService.findById(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario =resp
    })
  }

  filtrarTipo(tipo: string) {
    this.postagemService.findAllByTipo(tipo).subscribe((resp: Postagem[]) => {
      this.postagens = resp
    })
  }

  filtrarCategoria(id: number) {
    this.postagemService.findAllByCategoriaId(id).subscribe((resp: Postagem[]) => {
      this.postagens = resp
    })
  }
  

}

