import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario = environment.id
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.getUsuario(this.idUsuario)
  }

  atualizar(){
    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas estão incorretas!!!')
    }else{
      this.authService.update(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp
        alert('Usuário atualizado com sucesso! Entre novamente!')
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