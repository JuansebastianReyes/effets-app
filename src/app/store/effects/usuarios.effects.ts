import { UsuarioService } from './../../services/usuario.service';
import * as usuariosActions from './../actions/usuarios.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';



@Injectable()
export class UsuariosEffects{

  constructor(
    private actions$ : Actions,
    private usuariosServices: UsuarioService
  ){}

  cargarUsuarios$ = createEffect(
    ()=> this.actions$.pipe(
      ofType( usuariosActions.cargarUsuarios ),
      mergeMap(
        ()=> this.usuariosServices.getUsers().pipe(
          map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users } )),
          catchError(err=>of(usuariosActions.cargarUsuariosError({ payload:err })))
        )
      )
    )
  );
}
