import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = 'https://restcountries.com/v3.1';

  constructor( private http : HttpClient) { }


  bucarPais( query : string ) : Observable<Country[]> {
      const url = `${this.apiUrl}/name/${query}`
      return this.http.get<Country[]>(url)
  }

  bucarCapital( query : string ) : Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`
    return this.http.get<Country[]>(url)
  }

  bucarPaisPorId( id : string ) : Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url)
  }

  bucarPaisesPorContinente( continente : string ) : Observable<Country[]> {
    const url = `${this.apiUrl}/region/${continente}`
    return this.http.get<Country[]>(url)
  }

















}
