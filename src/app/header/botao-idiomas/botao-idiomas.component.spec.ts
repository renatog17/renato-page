import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoIdiomasComponent } from './botao-idiomas.component';

describe('BotaoIdiomasComponent', () => {
  let component: BotaoIdiomasComponent;
  let fixture: ComponentFixture<BotaoIdiomasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoIdiomasComponent]
    });
    fixture = TestBed.createComponent(BotaoIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
