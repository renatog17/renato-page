import { Component } from '@angular/core';
import { AlterarIdiomaService } from 'src/app/alterar-idioma.service';

@Component({
  selector: 'app-botao-idiomas',
  templateUrl: './botao-idiomas.component.html',
  styleUrls: ['./botao-idiomas.component.css']
})
export class BotaoIdiomasComponent {

  constructor(private alterarIdiomaService: AlterarIdiomaService) {
    
  }

  alterarIdiomaParaPortugues(){
    this.alterarIdiomaService.alterarIdioma('pt');
  }
  alterarIdiomaParaIngles(){
    this.alterarIdiomaService.alterarIdioma('en');
  }
}
