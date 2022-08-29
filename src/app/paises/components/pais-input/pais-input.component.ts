import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent{

  @Output()
  onEnter : EventEmitter<string> = new EventEmitter();

  termino! : string;

  buscar(){
    this.onEnter.emit(this.termino);
  }



}
