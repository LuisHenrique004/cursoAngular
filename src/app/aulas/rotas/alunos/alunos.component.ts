import { Component, OnInit } from '@angular/core';
import { AlunoService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos: any[] = [];

  constructor(private alunosService: AlunoService) {

  }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
