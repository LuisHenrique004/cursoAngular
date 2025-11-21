import { Component, OnInit } from '@angular/core';
import { AlunoService } from './alunos.service';
import { IFormCanDeactivate } from '../guards/iform-candeactivate.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit, IFormCanDeactivate {

  public alunos: any[] = [];

  constructor(private alunosService: AlunoService) {

  }
  podeDesativar(): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
