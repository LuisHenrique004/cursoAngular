import { Component, OnInit } from '@angular/core';
import { CursosService } from './services/cursos.service';
import { AuthService } from './aulas/rotas/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'angularCurso';

  mostrarMenu: boolean = false;

  cursos: string[] = [];

  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  constructor(private cursosService: CursosService, private authService: AuthService) {
    //this.cursos = this.cursosService.getCursos();

  }
  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
