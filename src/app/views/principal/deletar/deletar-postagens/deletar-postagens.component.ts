import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/models/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';

@Component({
  selector: 'app-deletar-postagens',
  templateUrl: './deletar-postagens.component.html',
  styleUrls: ['./deletar-postagens.component.css']
})
export class DeletarPostagensComponent implements OnInit {

  postagem: Postagem = new Postagem()

  idPost: number
  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    window.scroll(0, 0)

    this.idPost = this.route.snapshot.params['id']

    this.getPostagem(this.idPost)
  }

  getPostagem(id: number) {
    this.postagemService.findById(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })

  }

  apagar(){
    this.postagemService.delete(this.idPost).subscribe(()=>{
      alert('Sua postagem foi apagada com sucesso!')
      this.router.navigate(['/minhas-postagens'])
    })
  }

}
