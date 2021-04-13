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
  selector: 'app-minhas-postagens',
  templateUrl: './minhas-postagens.component.html',
  styleUrls: ['./minhas-postagens.component.css'],
})
export class MinhasPostagensComponent implements OnInit {

  postagens: Postagem[]

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  categorias: Categoria[]

  key = 'dataPostagem'
  reverse = true


  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private categoriaService: CategoriaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getUsuario()
  }


  getUsuario(){
    this.authService.findById(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
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
  
  apagarMinhaPostagem(id: number) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success btn-lg',
        cancelButton: 'btn btn-danger btn-lg mr-3'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Você tem certeza?',
      text: "Sua postagem apagada não poderá ser recuperada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Apagar',
      cancelButtonText: 'Melhor não',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Sucesso',
          'Sua postagem foi apagada',
          'success'
        )
        this.postagemService.delete(id).subscribe(()=>{
          this.router.navigate(['/minhas-postagens'])
          this.getUsuario()
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Foi por pouco, não? :)',
          'error'
        )
      }
    })

    
  }

}

