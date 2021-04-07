import { environment } from './../../../environments/environment.prod';
import { AuthService } from './../../service/auth.service';
import { UsuarioLogin } from './../../models/UsuarioLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }
  entrar(){
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.token = this.usuarioLogin.token
      environment.id = this.usuarioLogin.id
      environment.tipoUsuario = this.usuarioLogin.tipoUsuario
      environment.email = this.usuarioLogin.email

      this.router.navigate(['/'])
    }
    ,erro => {
      if(erro.status == 500){
        alert('E-mail e Senha estão incorretos!')
      }
    }

    )

  }

}
