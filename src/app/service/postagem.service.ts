import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }
  token = {
    headers: {
      'Authorization': environment.token
    }
  }

  create(postagem: Postagem): Observable<Postagem> {
    const url = this.baseUrl + '/postagens'
    return this.http.post<Postagem>(url, postagem, this.token)
  }
  findAll(): Observable<Postagem[]> {
    const url = this.baseUrl + '/postagens'
    return this.http.get<Postagem[]>(url, this.token)
  }

  findAllByCategoriaId(categoriaId: number): Observable<Postagem[]> {
    const url = this.baseUrl + `/postagens/categoria/${categoriaId}`
    return this.http.get<Postagem[]>(url, this.token)
  }

  findAllByTipo(tipo: string): Observable<Postagem[]> {
    const url = this.baseUrl + `/postagens/tipo/${tipo}`
    return this.http.get<Postagem[]>(url, this.token)
  }

  findById(id: number): Observable<Postagem>{
    const url = this.baseUrl + `/postagens/${id}`
    return this.http.get<Postagem>(url,this.token)
  }

  update(postagem: Postagem): Observable<Postagem>{
    const url = this.baseUrl +'/postagens'
    return this.http.put<Postagem>(url, postagem,this.token)
  }

  delete(id: number){
    const url = this.baseUrl + `/postagens/${id}`
    return this.http.delete(url, this.token)
  }


}


