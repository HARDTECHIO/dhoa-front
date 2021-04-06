import { environment } from './../../environments/environment.prod';
import { UsuarioLogin } from './../models/UsuarioLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

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
  getByIdUser(id:number):Observable<Usuario>{
    const url = this.baseUrl + `/usuarios/${id}`
    return this.http.get<Usuario>(url)  
  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    const url = this.baseUrl + "/usuarios/cadastrar"
    return this.http.post<Usuario>(url, usuario)
  }
}

