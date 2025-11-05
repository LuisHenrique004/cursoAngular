import { NgModule } from "@angular/core";

import { AlunosComponent } from "./alunos.component";
import { CommonModule } from "@angular/common";
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosRoutingModule } from "./alunos.routing.module";
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent, 
        AlunosFormComponent, AlunosDetalhesComponent],
    providers: [],
})

export class AlunosModule {}