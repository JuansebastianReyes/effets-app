import { AppState } from './../../store/app.reducers';
import { cargarUsuarios } from './../../store/actions/usuarios.actions';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usurarios: Usuario[] = []
  loading:boolean = false;
  error:any;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe(({ users , loading, error})=>{
      this.usurarios = users;
      this.loading = loading;
      this.error = error
    })

    this.store.dispatch(cargarUsuarios());
    /* this.usuarioSerivice.getUsers().subscribe(
      users =>{
        console.log(users)
        this.usurarios = users;
      }
    ) */
  }

}
