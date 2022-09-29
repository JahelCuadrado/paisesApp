import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones     : string[]  = ['africa', 'america', 'asia', 'europe', 'oceania']
  regionActiva : string    = "";
  paises       : Country[] = []
  mostrarTabla : boolean   = false;

  constructor(
    private paisService : PaisService
  ) { }

  ngOnInit(): void {
  }


  getClaseCSS(region:string){
      return (region == this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }


  activarRegion(region:string){
    this.regionActiva = region

    this.paisService.bucarPaisesPorContinente(region).subscribe({

      next: (resp) => {
        this.paises = resp
        this.mostrarTabla = true
      },

      error: (error) =>{
        console.log("Peticion get fallida")
        this.mostrarTabla = false
      }

    })
  }

}
