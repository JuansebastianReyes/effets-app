import { cargarUsuario } from './../actions/usuario.actions';
import { UsuarioService } from './../../services/usuario.service';
import * as usuariosActions from './../actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';



@Injectable()
export class UsuarioEffects{

  constructor(
    private actions$ : Actions,
    private usuariosServices: UsuarioService
  ){}

  cargarUsuarios$ = createEffect(
    ()=> this.actions$.pipe(
      ofType( usuariosActions.cargarUsuario ),
      mergeMap(
        ( action )=> this.usuariosServices.getUserById( action.id ).pipe(
          map( user => usuariosActions.cargarUsuarioSuccess({ usuario: user } )),
          catchError(err=>of(usuariosActions.cargarUsuarioError({ payload:err })))
        )
      )
    )
  );
}
