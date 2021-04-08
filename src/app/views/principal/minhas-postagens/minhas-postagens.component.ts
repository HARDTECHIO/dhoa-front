import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  usuario: Usuario = new Usuario()
  idUsuario = environment.id
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

}

