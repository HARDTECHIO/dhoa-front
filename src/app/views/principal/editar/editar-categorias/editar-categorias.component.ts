import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit {

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

  atualizar() {
    this.categoriaService.update(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert('Categoria atualizado com sucessso!')
      this.router.navigate(['/categorias'])
    })
  }
}
