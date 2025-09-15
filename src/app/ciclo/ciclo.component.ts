import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, 
OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, 
AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    console.log('Construtor');
  }

  ngOnChanges() {
    console.log('ngOnChange');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

}
