import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // Aula #9
  // url: string = 'www.google.com';

  // getValor() {
  //   return 2;
  // }

  // cursoAngular: boolean = false;

  // getCurtirCurso() {
  //   return true;
  // }

  // imageUrl: string = 'http://lorempixel.com.br/200/200'

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nome: string = 'Xakiu';

  pessoa: any = {
    nome: 'Xakiu',
    idade: 20

  }

  nomeDoCurso: string = 'c#';

  botaoClique() {
    return alert('Que doidera!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
