import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './aulas/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

import { InputPropertyComponent } from './aulas/input-property/input-property.component';
import { OutputPropertyComponent } from './aulas/output-property/output-property.component';
import { CicloComponent } from './aulas/ciclo/ciclo.component';
import { DiretivaNgifComponent } from './aulas/diretivas/diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './aulas/diretivas/diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './aulas/diretivas/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaClassComponent } from './aulas/diretivas/diretiva-class/diretiva-class.component';
import { DiretivaNgstyleComponent } from './aulas/diretivas/diretiva-ngstyle/diretiva-ngstyle.component';
import { NgContentComponent } from './aulas/ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './aulas/diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { CursosService } from './aulas/cursos/cursos.service';
import { CriarCursoModule } from './aulas/criar-curso/criar-curso.module';
import { CursoModule } from './aulas/cursos/cursos.module';
import { ExemplosPipesComponent } from './aulas/exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { SettingsService } from './services/settings.service';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { FiltroArrayImpuroPipe } from './pipes/filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaClassComponent,
    DiretivaNgstyleComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    ExemplosPipesComponent,
    CamelCasePipe,
    FilterArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CriarCursoModule,
    CursoModule
  ],
  providers: [
    CursosService,
    /*SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale();
    }*/
       /*{
      provide: LOCALE_ID,
      useValue: 'pt'

    }*/

  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
