import { AuthService } from 'src/app/service/auth.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  mensagem = {
    email: '',
    nome: '',
    assunto: ''
  }

  validacaoEmail = false
  validacaoNome = false
  validacaoAssunto = false
  validacaoMensagem = false




  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
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

  validaNome(event: any) {
    this.validacaoNome = this.validar(event.target.value.length < 3 || event.target.value.length > 255, event)
  }

  validaEmail(event: any){
    this.validacaoEmail = this.validar(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.') == -1, event)
  }

  validaAssunto(event: any){
    this.validacaoAssunto = this.validar(event.target.value != "A", event)
  }

  validaMensagem(event: any){
    this.validacaoMensagem = this.validar(event.target.value.length < 11 || event.target.value.length > 255, event)
  }

  enviar(){
    if(this.validacaoNome) {
      Swal.fire({
        icon: 'success',
        title: 'Obrigado!',
        text: 'Recebemos sua sugestão ou reclamação com sucesso.',
        showConfirmButton: false,
        timer: 2000
      })
      this.router.navigate(['/redirect/site'])
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
