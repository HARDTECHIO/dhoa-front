import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: {
      'Authorization': environment.token
    }
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = this.baseUrl + '/categorias'
    return this.http.post<Categoria>(url, categoria, this.token)
  }

  findAll(): Observable<Categoria[]> {
    const url = this.baseUrl + '/categorias'
    return this.http.get<Categoria[]>(url, this.token)
  }

  findById(id: number): Observable<Categoria> {
    const url = this.baseUrl + `/categorias/${id}`
    return this.http.get<Categoria>(url, this.token)
  }
}
