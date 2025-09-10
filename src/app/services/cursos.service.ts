import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return  ['Angular', 'C#', 'Flutter', 'Loucura'];
  }

}
