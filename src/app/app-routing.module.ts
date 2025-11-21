import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './aulas/rotas/home/home.component';
import { LoginComponent } from './aulas/rotas/login/login.component';
import { CursosComponent } from './aulas/cursos/cursos.component';
import { AuthGuard } from './aulas/rotas/guards/auth.guard';
import { AlunosComponent } from './aulas/rotas/alunos/alunos.component';
import { PaginaNaoEncontradaComponent } from './aulas/rotas/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'cursos', 
    component: CursosComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  { path: 'alunos', 
    component: AlunosComponent, 
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  { path: '**', component: PaginaNaoEncontradaComponent, canActivate:[AuthGuard]}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
