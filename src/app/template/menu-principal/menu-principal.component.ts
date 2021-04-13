import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Você deseja realmente sair ?',
      showDenyButton: false,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: `Sair`,
      denyButtonText: `Não sair`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/site'])
        Swal.fire('Saiu com sucesso!', '', 'success')
      } else if (result.isDenied) {
        this.router.navigate(['/'])
        Swal.fire('Que bom que você decidiu ficar!', '', 'info')
      }
    })
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
