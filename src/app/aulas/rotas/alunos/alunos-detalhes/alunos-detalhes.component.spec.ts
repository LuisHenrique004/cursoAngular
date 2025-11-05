import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosDetalhesComponent } from './alunos-detalhes.component';

describe('AlunosDetalhesComponent', () => {
  let component: AlunosDetalhesComponent;
  let fixture: ComponentFixture<AlunosDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosDetalhesComponent]
    });
    fixture = TestBed.createComponent(AlunosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
