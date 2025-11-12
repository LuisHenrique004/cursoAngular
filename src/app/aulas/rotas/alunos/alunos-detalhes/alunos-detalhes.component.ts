import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunoService } from '../alunos.service';
import { AlunosModule } from '../alunos.module';

@Component({
  selector: 'app-alunos-detalhes',
  templateUrl: './alunos-detalhes.component.html',
  styleUrls: ['./alunos-detalhes.component.css']
})

export class AlunosDetalhesComponent implements OnInit, OnDestroy {
  
  aluno: any;
  inscricao: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunoService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao!.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

}
