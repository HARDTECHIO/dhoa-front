import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { CategoriasComponent } from './views/principal/categorias/categorias.component';
import { DeletarPostagensComponent } from './views/principal/deletar/deletar-postagens/deletar-postagens.component';
import { DeletarCategoriasComponent } from './views/principal/deletar/deletar-categorias/deletar-categorias.component';
import { EditarCategoriasComponent } from './views/principal/editar/editar-categorias/editar-categorias.component';
import { EditarPostagensComponent } from './views/principal/editar/editar-postagens/editar-postagens.component';
import { InicioComponent } from './views/principal/inicio/inicio.component';
import { MinhasPostagensComponent } from './views/principal/minhas-postagens/minhas-postagens.component';
import { PerfilComponent } from './views/principal/perfil/perfil.component';
import { SiteComponent } from './views/site/site.component';

const routes: Routes = [
  // Rotas não logado
  { path: 'site', component: SiteComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },

  // Rotas do usuário logado
  { path: '', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'minhas-postagens', component: MinhasPostagensComponent },
  { path: 'postagem/editar/:id', component: EditarPostagensComponent },
  { path: 'postagem/apagar/:id', component: DeletarPostagensComponent },

  //Rotas Usuarios ADM
  { path: 'categorias', component: CategoriasComponent },




  { path: 'categorias/editar/:id', component: EditarCategoriasComponent },
  { path: 'categorias/apagar/:id', component: DeletarCategoriasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
