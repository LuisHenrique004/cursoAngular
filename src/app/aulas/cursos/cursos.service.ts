import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "../../services/log.service";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'C#'];

    constructor(private logService: LogService) {

    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos')
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso de ${curso}`)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }
}