import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit {

  categoria: Categoria = new Categoria()
  id: number

  // Variável de validação
  categoriaValida = true
  descricaoValida = true
  iconeValido = true

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getCategoria(this.id)
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

  getCategoria(id: number) {
    this.categoriaService.findById(id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  atualizar() {
    if(this.categoriaValida && this.descricaoValida) {
      this.categoriaService.update(this.categoria).subscribe((resp: Categoria) => {
        this.categoria = resp
        Swal.fire({
          icon: 'success',
          title: 'Muito bom',
          text: 'Categoria atualizada com sucesso!',
          timer: 1500
        })
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
}
