import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

const alunosRoutes: Routes = [
  {
    path: 'alunos', component: AlunosComponent, children: [
      { path: 'novo', component: AlunosFormComponent },
      { path: ':id', component: AlunosDetalhesComponent },
      { path: ':id/editar', component: AlunosFormComponent }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
