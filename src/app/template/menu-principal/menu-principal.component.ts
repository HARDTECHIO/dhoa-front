import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {


  nome = environment.nome
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  isAdmin() {
    let resp = false
    if (environment.tipoUsuario == 'admin') {
      resp = true
    }
    return resp
  }

  logout() {
    this.router.navigate(['/site'])
    this.clearEnv()
  }

  clearEnv() {
    environment.id = 0
    environment.nome = ''
    environment.foto = ''
    environment.email = ''
    environment.tipoUsuario = ''
    environment.token = ''
  }
}
