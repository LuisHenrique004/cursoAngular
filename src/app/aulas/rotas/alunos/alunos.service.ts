import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  public alunosList: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'xakis01@gmail.com'},
    {id: 2, nome: 'Aluno 02', email: 'xakis02@gmail.com'},
    {id: 3, nome: 'Aluno 03', email: 'xakis03@gmail.com'},
    {id: 4, nome: 'Aluno 04', email: 'xakis04@gmail.com'}
  ];

  getAlunos() {
    return this.alunosList;
  }

  getAluno(id: number) {
    for (let i=0; i < this.alunosList.length; i++) {
      let aluno = this.alunosList[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
  }

  constructor() { }
}
