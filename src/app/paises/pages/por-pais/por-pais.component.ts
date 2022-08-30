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

  placeholder : string = "Buscar país..."

  constructor( private paisService : PaisService) { }

  buscar(termino:string){
      this.paisService.bucarPais(termino).subscribe({

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


  sugerencias( termino : string ){
    this.error = false
    //TODO: Crear sugerencias
  }


}
