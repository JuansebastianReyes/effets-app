import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${ this.url }/users?per_page=6&delay=10`).pipe(
      map((res: any) =>{return res['data']})
    );
  }

  getUserById( id: string ) {
    return this.http.get(`${ this.url }/users/${ id }`)
          .pipe(
            map( resp => resp['data'])
          );
  }
}
