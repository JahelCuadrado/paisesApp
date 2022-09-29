import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  @Input()  placeholder : string = ""
  @Output() onEnter     : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce  : EventEmitter<string> = new EventEmitter();

  debouncer             : Subject<string> = new Subject();
  termino!              : string;

  //añadir a los apuntes el dobouncetime
  ngOnInit(): void {
    this.debouncer  //Hacemos que emita el valor con un retraso de 100 milisegundos
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit( valor )
    })

  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event : any){
    this.debouncer.next(event)  //Mandamos el valor a todo los observadores suscritos
  }



}
