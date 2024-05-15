import { TestBed } from '@angular/core/testing';

import { AlterarIdiomaService } from './alterar-idioma.service';

describe('AlterarIdiomaService', () => {
  let service: AlterarIdiomaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlterarIdiomaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
