import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : Country;

  constructor(
    private activateRoute : ActivatedRoute,  //TODO 1: Creamos un objeto de tipo activatedroute de rxjs

    private paisService   : PaisService
    ) { }

  ngOnInit(): void {



      this.activateRoute.params  //TODO 2: Nos suscribimos a activatedroute params, con esto nos suscribimos a los cambios que vaya a tener la url y nos devuelve los parametros de la misma. En este caso nos devolveria un objeto params con una propiedad llamada id, que es el nombre que le pusimos nosotros en el app-routing module
      .pipe(
        switchMap(({id}) => this.paisService.bucarPaisPorId(id)),
        tap(console.log)  //hace una impresion de la respuesta
      ).subscribe( resp => {
        this.pais = resp[0]
      })


    // this.activateRoute.params
    // .subscribe( ({id})=> {

    //     this.paisService.bucarPaisPorId(id)
    //     .subscribe( pais => {
    //       console.log(pais)
    //     })

    // })
  }

}
