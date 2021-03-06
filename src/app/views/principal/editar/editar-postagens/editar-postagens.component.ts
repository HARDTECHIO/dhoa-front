import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { Postagem } from 'src/app/models/Postagem';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { PostagemService } from 'src/app/service/postagem.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-postagens',
  templateUrl: './editar-postagens.component.html',
  styleUrls: ['./editar-postagens.component.css']
})
export class EditarPostagensComponent implements OnInit {

  postagem: Postagem = new Postagem()

  categoria: Categoria = new Categoria()
  categorias: Categoria[]
  idCategoria: number

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private authService: AuthService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    window.scroll(0, 0)

    let id = this.route.snapshot.params['id']

    this.listarCategorias()
    this.getPostagem(id)
  }

  atualizar() {
    this.categoria.id = this.idCategoria
    this.postagem.categoria = this.categoria

    if(this.postagem.categoria != null) {
      this.postagemService.create(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Sua postagem foi atualiada',
          showConfirmButton: false,
          timer: 1500
        })
        this.postagem = new Postagem()
        this.router.navigate(['/minhas-postagens'])
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Verifique os campos preenchidos',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  getCategoria() {
    this.categoriaService.findById(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  listarCategorias() {
    this.categoriaService.findAll().subscribe((resp: Categoria[]) => {
      this.categorias = resp
    })
  }

  verificaTipoPostagem(event: any) {
    this.postagem.tipoPostagem = event.target.value
  }

  getPostagem(id: number) {
    this.postagemService.findById(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })

  }
}
