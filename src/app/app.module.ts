import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CardProjectComponent } from './projects/card-project/card-project.component';
import { BotaoIdiomasComponent } from './header/botao-idiomas/botao-idiomas.component';
import { HeaderComponent } from './header/header.component';
import { IdiomaVisibilidadeDirective } from './directives/idioma-visibilidade.directive';
import { ButtonHomeComponent } from './home/button-home/button-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    CardProjectComponent,
    BotaoIdiomasComponent,
    HeaderComponent,
    IdiomaVisibilidadeDirective,
    ButtonHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
