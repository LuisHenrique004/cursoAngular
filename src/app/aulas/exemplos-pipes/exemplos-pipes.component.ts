import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    editora: 'Darkside Books',
    rating: 4.54321,
    idioma: 'Português',
    paginas: 480,
    preco: 35.99
  };

  livros: string[] = ['Advogado do diabo', 'Máquinas Humanas'];

  filtro: string = '';


  constructor() {

  }

  addCurso(valor: string) {
    this.livros.push(valor);
  }


  obterCursos() {
    if (this.livros.length === 0 || this.filtro === null || this.filtro?.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro?.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

    ngOnInit(): void {

  }

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'))

}
