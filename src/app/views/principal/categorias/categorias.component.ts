import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria: Categoria = new Categoria()
  categorias: Categoria[]

  // Variável de validação
  categoriaValida = false
  descricaoValida = false
  iconeValido = true

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.listar()
  }

  validaCategoria(event: any) {
    this.categoriaValida = this.validar(event.target.value.length < 2 || event.target.value.length > 50, event)
  }

  validaDescricao(event: any) {
    this.descricaoValida = this.validar(event.target.value.length < 4 || event.target.value.length > 255, event)
  }

  validaIcone(event: any) {
    this.iconeValido = this.validar(event.target.value.length < 0, event)
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

  cadastrar() {
    if (this.categoriaValida && this.descricaoValida && this.iconeValido) {
      this.categoriaService.create(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        this.categoria = new Categoria()
        Swal.fire({
          icon: 'success',
          title: 'Muito bom',
          text: 'Categoria cadastrada com sucesso!',
          timer: 1500
        })
        this.listar()
        this.router.navigate(['/categorias'])
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Preencha os campos corretamente'
      })
    }
  }

  listar() {
    this.categoriaService.findAll().subscribe((resp: Categoria[]) => {
      this.categorias = resp
    })
  }

  apagar(id: number, nome: string) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success btn-lg',
        cancelButton: 'btn btn-danger btn-lg mr-3'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Você tem certeza?',
      text: "Após apagada, essa categoria não poderá ser recuperada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Apagar',
      cancelButtonText: 'Melhor não',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Sucesso',
          'A categoria ' + nome + ' foi apagada',
          'success'
        )
        this.categoriaService.delete(id).subscribe(() => {
          this.listar()
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
