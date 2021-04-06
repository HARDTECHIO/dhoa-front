import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  baseurl = environment.baseUrl

  constructor(private http: HttpClient) { }
  token = {
    headers: {
      'Authorization': environment.token
    }
  }

  create(postagem: Postagem): Observable<Postagem> {
    const url = this.baseurl + "/postagens"
    return this.http.post<Postagem>(url, postagem, this.token)
  }
  findAll(): Observable<Postagem[]> {
    const url = this.baseurl + "/postagens"
    return this.http.get<Postagem[]>(url, this.token)
  }
}


