import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino        : string    = ""
  error          : boolean   = false
  mostrarTabla   : boolean   = false
  paises         : Country[] = []


  constructor( private paisService : PaisService) { }

  buscar(){
      this.paisService.bucarPais(this.termino).subscribe({

        next: (paises) => {
          this.paises = paises;

          console.log(paises);

          this.error = false
          this.mostrarTabla = true
        },

        error: (error) => {

          console.log("Error");
          console.info(error)

          this.error = true
          this.mostrarTabla = false
        }})}
}
