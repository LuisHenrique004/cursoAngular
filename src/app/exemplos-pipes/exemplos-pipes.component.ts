import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {

  }

  constructor() {

  }


}
