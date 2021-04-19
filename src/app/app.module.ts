import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';


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
import { CategoriasComponent } from './views/principal/categorias/categorias.component';
import { EditarCategoriasComponent } from './views/principal/editar/editar-categorias/editar-categorias.component';
import { DeletarCategoriasComponent } from './views/principal/deletar/deletar-categorias/deletar-categorias.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { RedirectComponent } from './handlers/redirect/redirect.component';



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
    DeletarPostagensComponent,
    CategoriasComponent,
    EditarCategoriasComponent,
    DeletarCategoriasComponent,
    DateAgoPipe,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrderModule

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
