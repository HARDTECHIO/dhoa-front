import { environment } from './../../../environments/environment.prod';
import { AuthService } from './../../service/auth.service';
import { UsuarioLogin } from './../../models/UsuarioLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  emailValido = false
  senhaValida = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  validaEmail(event: any) {
    this.emailValido = this.validar(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.') == -1, event)
  }

  validaSenha(event: any) {
    this.senhaValida = this.validar(event.target.value.length < 5 || event.target.value.length > 12, event)
  }

  validar(condicao: boolean, event: any) {
    let valido = false
    if (condicao) {
      event.target.classList.remove("is-valid")
      event.target.classList.add("is-invalid")
    } else {
      event.target.classList.remove("is-invalid")
      event.target.classList.add("is-valid")
      valido = true
    }
    return valido
  }

  entrar() {
    if (this.emailValido && this.senhaValida) {
      this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
        this.usuarioLogin = resp

        environment.nome = this.usuarioLogin.nome
        environment.foto = this.usuarioLogin.foto
        environment.token = this.usuarioLogin.token
        environment.id = this.usuarioLogin.id
        environment.tipoUsuario = this.usuarioLogin.tipoUsuario
        environment.email = this.usuarioLogin.email

        Swal.fire({
          icon: 'success',
          title: 'Muito bom',
          text: 'Usuário logado...',
          showConfirmButton: false,
          timer: 1500
        })
        
        this.router.navigate(['/'])
      }, erro => {
          if (erro.status == 500) {
            Swal.fire({
              icon: 'error',
              title: 'Ocorreu um erro',
              text: 'E-mail e/ou senha incorretos!',
              showConfirmButton: false,
              timer: 2000
            })
          }
        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Preencha os campos corretamente',
        showConfirmButton: false,
        timer: 2000
      })
    }

  }

}
