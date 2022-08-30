import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  @Input()
  placeholder : string = ""

  //TODO: añadir a los apuntes el dobouncetime
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(100))
    .subscribe(valor => {
      this.onDebounce.emit( valor )
    })
  }

  @Output()
  onEnter : EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce : EventEmitter<string> = new EventEmitter();

  debouncer : Subject<string> = new Subject();

  termino! : string;

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event : any){
    this.debouncer.next( event )
  }



}
