import { UsuarioLogin } from './../models/UsuarioLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl


  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    const url = this.baseUrl + '/usuarios/logar'
    return this.http.post<UsuarioLogin>(url, usuarioLogin)
  }
  findById(id:number):Observable<Usuario>{
    const url = this.baseUrl + `/usuarios/${id}`
    return this.http.get<Usuario>(url, {headers:{'Authorization': environment.token}})  
  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    const url = this.baseUrl + "/usuarios/cadastrar"
    return this.http.post<Usuario>(url, usuario) 
  }
}

