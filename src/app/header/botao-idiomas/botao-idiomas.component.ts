import { Component } from '@angular/core';
import { AlterarIdiomaService } from 'src/app/alterar-idioma.service';

@Component({
  selector: 'app-botao-idiomas',
  templateUrl: './botao-idiomas.component.html',
  styleUrls: ['./botao-idiomas.component.css']
})
export class BotaoIdiomasComponent {

  portuguesAtivo: boolean = false;
  inglesAtivo: boolean = true;
  constructor(private alterarIdiomaService: AlterarIdiomaService) {
    
  }

  alterarIdiomaParaPortugues(){
    this.alterarIdiomaService.alterarIdioma('pt');
    this.inglesAtivo = false;
    this.portuguesAtivo = true;
  }
  alterarIdiomaParaIngles(){
    this.alterarIdiomaService.alterarIdioma('en');
    this.inglesAtivo = true;
    this.portuguesAtivo = false;
  }
}
