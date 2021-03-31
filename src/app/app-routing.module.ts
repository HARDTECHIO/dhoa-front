import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { InicioComponent } from './views/principal/inicio/inicio.component';
import { SiteComponent } from './views/site/site.component';

const routes: Routes = [
  // Rotas não logado
  {path: 'site', component: SiteComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  
  // Rotas do usuário logado
  {path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
