import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { SiteComponent } from './views/site/site.component';

const routes: Routes = [
  {path: '', component: SiteComponent, pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
