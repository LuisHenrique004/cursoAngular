import { NgModule } from "@angular/core";

import { AlunosComponent } from "./alunos.component";
import { CommonModule } from "@angular/common";
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunoService } from "./alunos.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunosFormComponent, AlunosDetalhesComponent],
    providers: [AlunoService],
})

export class AlunosModule {}