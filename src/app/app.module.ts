import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './template/menu/menu.component';
import { RodapeComponent } from './template/rodape/rodape.component';
import { SiteComponent } from './views/site/site.component';
import { EntrarComponent } from './views/entrar/entrar.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { MenuPrincipalComponent } from './template/menu-principal/menu-principal.component';
import { InicioComponent } from './views/principal/inicio/inicio.component';
import { PerfilComponent } from './views/principal/perfil/perfil.component';
import { MinhasPostagensComponent } from './views/principal/minhas-postagens/minhas-postagens.component';
import { EditarPostagensComponent } from './views/principal/editar/editar-postagens/editar-postagens.component';
import { DeletarPostagensComponent } from './views/principal/deletar/deletar-postagens/deletar-postagens.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    SiteComponent,
    EntrarComponent,
    CadastrarComponent,
    MenuPrincipalComponent,
    InicioComponent,
    PerfilComponent,
    MinhasPostagensComponent,
    EditarPostagensComponent,
    DeletarPostagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
