import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  placeholder : string = "Buscar capital..."

  constructor(
    private paisService : PaisService
  ){}

  error          : boolean   = false;
  mostrarTabla   : boolean   = false;

  capitales : Country[] = [];

  buscar(termino:string){
      this.paisService.bucarCapital(termino)
      .subscribe({
        next: (capitales) => {
            this.capitales = capitales
            this.error = false
            this.mostrarTabla = true
        },
        error: (error) =>{
          this.error = true;
          this.mostrarTabla = false
        }
      })
  }

}
