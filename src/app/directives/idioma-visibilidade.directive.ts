import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlterarIdiomaService } from '../alterar-idioma.service';

@Directive({
  selector: '[appIdiomaVisibilidade]'
})
export class IdiomaVisibilidadeDirective implements OnInit, OnDestroy{

  @Input('appIdiomaVisibilidade') idioma?: string;
  private idiomaSubscription?: Subscription;
  
  constructor(private el: ElementRef, private idiomaService: AlterarIdiomaService) { }

  ngOnInit(): void {
    this.idiomaSubscription = this.idiomaService.alterarIdiomaSubject$.subscribe(alterarIdiomaSubject =>{
      this.el.nativeElement.style.display = this.idioma === alterarIdiomaSubject ? 'block' :'none';
    })
  }

  ngOnDestroy(): void {
    this.idiomaSubscription?.unsubscribe();
  }
}
