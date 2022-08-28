import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino : string = ""

  constructor( private paisService : PaisService) { }

  buscar(){
      this.paisService.bucarPais(this.termino)
  }
}
