import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent {

  @Input() imagePath?: string;
  @Input() titulo?: string;
  @Input() descricao?: string;
  @Input() linkDeploy?: string;
  @Input() linkGitHub?: string;
  @Input() iconTecnologias: string[] = [];
}
