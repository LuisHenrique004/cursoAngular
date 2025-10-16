import { Component } from '@angular/core';
import { CursosService } from './services/cursos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularCurso';

  cursos: string[] = [];

  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  constructor(private cursosService: CursosService) {
    //this.cursos = this.cursosService.getCursos();

  }
}
