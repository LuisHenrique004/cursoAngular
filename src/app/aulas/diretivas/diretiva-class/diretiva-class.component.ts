import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-class',
  templateUrl: './diretiva-class.component.html',
  styleUrls: ['./diretiva-class.component.css']
})
export class DiretivaClassComponent implements OnInit {

  public meuFavorito: boolean = false;

  ngOnInit(): void {


  }

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }


}
