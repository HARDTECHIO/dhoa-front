import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario = environment.id
  confirmarSenha: string

  // Variável de validação
  nomeValido = true
  emailValido = true
  imagemUrlValida = true
  senhaValida = true
  confirmaSenha = true

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.getUsuario(this.idUsuario)
  }

  validaNome(event: any) {
    this.nomeValido = this.validar(event.target.value.length < 2 || event.target.value.length > 100, event)
  }

  validaEmail(event: any) {
    this.emailValido = this.validar(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.') == -1, event)
  }

  validaSenha(event: any) {
    this.senhaValida = this.validar(event.target.value.length < 5 || event.target.value.length > 255, event)
  }

  validaConfirmaSenha(event: any) {
    this.confirmaSenha = this.validar(event.target.value.length < 5 || event.target.value.length > 255, event)
  }

  validaImagemUrl(event: any) {
    this.imagemUrlValida = this.validar(event.target.value.length < 0 || event.target.value.length > 255, event)
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

  atualizar(){
    this.usuario.postagens = []
    if(!this.nomeValido || !this.emailValido || !this.senhaValida || !this.confirmaSenha || !this.imagemUrlValida || this.senhaValida != this.confirmaSenha){
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro',
        text: 'Preencha os campos corretamente'
      })
    } else{
      this.authService.update(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp
        Swal.fire({
          icon: 'success',
          title: 'Muito bom',
          text: 'Usuário atualizado com sucesso! Entre novamente!',
          timer: 1500
        })
        this.clearEnv()
        this.router.navigate(['/entrar'])
      })
    }
  }

  clearEnv() {
    environment.id = 0
    environment.nome = ''
    environment.foto = ''
    environment.email = ''
    environment.tipoUsuario = ''
    environment.token = ''
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  getUsuario(id: number) {
    this.authService.findById(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  }