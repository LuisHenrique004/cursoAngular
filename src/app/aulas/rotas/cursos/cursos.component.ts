import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  
  cursos: any[] = [];
  
  constructor(private cursosService: CursosService) {

  }
  
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
