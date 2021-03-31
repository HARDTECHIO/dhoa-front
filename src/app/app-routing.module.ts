import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './views/entrar/entrar.component';
import { SiteComponent } from './views/site/site.component';

const routes: Routes = [
  {path: '', component: SiteComponent, pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
