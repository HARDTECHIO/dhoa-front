import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-deletar-categorias',
  templateUrl: './deletar-categorias.component.html',
  styleUrls: ['./deletar-categorias.component.css']
})
export class DeletarCategoriasComponent implements OnInit {

  categoria: Categoria = new Categoria()
  id: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getCategoria(this.id)
    console.log(this.categoria)
  }

  getCategoria(id: number) {
    this.categoriaService.findById(id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  deletar() {
    this.categoriaService.delete(this.id).subscribe(() => {
      alert('Categoria apagada com sucesso!')
      this.router.navigate(['/categorias'])
    })
  }

}
