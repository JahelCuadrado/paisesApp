import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent{

  termino            : string    = ""
  error              : boolean   = false
  mostrarTabla       : boolean   = false
  paises             : Country[] = []
  paisesSugeridos    : Country[] = []
  mostrarSugerencias : boolean   = false
  placeholder        : string    = "Buscar país..."

  constructor( private paisService : PaisService) { }

  buscar(termino:string){
    console.log("EL TERMINO: ", termino);

      this.paisService.bucarPais(termino).subscribe({

        next: (paises) => {
          this.paises       = paises;
          this.error        = false
          this.mostrarTabla = true

          console.log(paises);
        },

        error: (error) => {
          this.error        = true
          this.mostrarTabla = false

          console.log("Error");
          console.info(error)
        }})}


  sugerencias( termino : string ){

    this.error              = false
    this.termino            = termino
    this.mostrarSugerencias = true

    this.paisService.bucarPais(termino)
    .subscribe({
      next  : (paises) => this.paisesSugeridos = paises.splice(0,3),
      error : (error)  => this.paisesSugeridos = []
    })

  }

  buscarTermino(termino : string){
      this.buscar(termino);
      this.mostrarSugerencias = false;
  }


}
