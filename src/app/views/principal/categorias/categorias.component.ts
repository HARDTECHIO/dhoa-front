import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoria: Categoria = new Categoria()
  categorias: Categoria[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {

    this.listar()
  }

  cadastrar() {
    this.categoriaService.create(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp

      this.categoria = new Categoria()
      alert("Categoria Cadastrada com sucesso!")
      this.listar()
    })
  }

  listar() {
    this.categoriaService.findAll().subscribe((resp: Categoria[]) => {
      console.log(resp)
      this.categorias = resp
    })
  }

}
