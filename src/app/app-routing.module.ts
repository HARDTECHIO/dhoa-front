import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { CategoriasComponent } from './views/principal/categorias/categorias.component';
import { InicioComponent } from './views/principal/inicio/inicio.component';
import { MinhasPostagensComponent } from './views/principal/minhas-postagens/minhas-postagens.component';
import { PerfilComponent } from './views/principal/perfil/perfil.component';
import { SiteComponent } from './views/site/site.component';

const routes: Routes = [
  // Rotas não logado
  {path: 'site', component: SiteComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  
  // Rotas do usuário logado
  {path: '', component: InicioComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'minhas-postagens', component: MinhasPostagensComponent},
  
  //Rotas Usuarios ADM
  {path: 'categorias', component: CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
