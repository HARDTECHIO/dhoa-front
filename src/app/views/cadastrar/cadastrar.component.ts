import { AuthService } from './../../service/auth.service';
import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario

  nomeValido = false
  emailValido = false
  fotoValida = false
  senhaValida = false
  confirmaSenha = false


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  validaNome(event: any) {
    this.nomeValido = this.validar(event.target.value.length < 2 || event.target.value.length > 100, event)
  }

  validaEmail(event: any) {
    this.emailValido = this.validar(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.') == -1, event)
  }

  validaFoto(event: any) {
    let regex = /\.(jpe?g|png)$/i
    this.fotoValida = this.validar(!regex.test(event.target.value), event)
  }

  validaSenha(event: any) {
    this.senhaValida = this.validar(event.target.value.length < 5 || event.target.value.length > 40, event)
  }

  validaConfirmaSenha(event: any) {
    this.confirmaSenha = this.validar(event.target.value.length < 5 || event.target.value.length > 40, event)
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

  cadastrar(){
    if(this.senhaValida != this.confirmaSenha){
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'As senhas não conferem',
        showConfirmButton: false,
        timer: 2000
      })
    } else{
      if(this.nomeValido && this.emailValido && this.senhaValida && this.confirmaSenha) {
        if(this.usuario.imagemUrl == '' || this.usuario.imagemUrl == null) {
          this.usuario.imagemUrl = 'https://i.imgur.com/wLwPeGf.png'
        }
        this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
          this.usuario = resp
          this.router.navigate(['/entrar'])
          Swal.fire({
            icon: 'success',
            title: 'Muito bom',
            text: 'Usuário cadastrado com sucesso',
            showConfirmButton: false,
            timer: 1500
          })
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

}
