'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">doa-front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-de1a5c2548edc5c0d010c8650714f6f7"' : 'data-target="#xs-components-links-module-AppModule-de1a5c2548edc5c0d010c8650714f6f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-de1a5c2548edc5c0d010c8650714f6f7"' :
                                            'id="xs-components-links-module-AppModule-de1a5c2548edc5c0d010c8650714f6f7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeletarCategoriasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeletarCategoriasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeletarPostagensComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeletarPostagensComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarCategoriasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditarCategoriasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarPostagensComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditarPostagensComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuPrincipalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuPrincipalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MinhasPostagensComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MinhasPostagensComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RodapeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RodapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SiteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-de1a5c2548edc5c0d010c8650714f6f7"' : 'data-target="#xs-pipes-links-module-AppModule-de1a5c2548edc5c0d010c8650714f6f7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-de1a5c2548edc5c0d010c8650714f6f7"' :
                                            'id="xs-pipes-links-module-AppModule-de1a5c2548edc5c0d010c8650714f6f7"' }>
                                            <li class="link">
                                                <a href="pipes/DateAgoPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateAgoPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Categoria.html" data-type="entity-link">Categoria</a>
                            </li>
                            <li class="link">
                                <a href="classes/Postagem.html" data-type="entity-link">Postagem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsuarioLogin.html" data-type="entity-link">UsuarioLogin</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriaService.html" data-type="entity-link">CategoriaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostagemService.html" data-type="entity-link">PostagemService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});