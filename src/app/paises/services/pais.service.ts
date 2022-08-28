import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = 'https://restcountries.com/v3.1';

  constructor( private http : HttpClient) { }

  bucarPais( query : string ) : Observable<any> {
      const url = `${this.apiUrl}/name/${query}`
      return this.http.get(url)
  }


















}
