import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlterarIdiomaService {
  private alterarIdiomaSubject = new BehaviorSubject<string>('en');
  alterarIdiomaSubject$ = this.alterarIdiomaSubject.asObservable();
  
  constructor() { }

  alterarIdioma(idioma: string){
    console.log('clicado')
    const idiomaAtual = this.alterarIdiomaSubject.getValue();
    const novoIdioma = idiomaAtual === 'en' ? 'pt':'en';
    this.alterarIdiomaSubject.next(idioma);
  }
}
