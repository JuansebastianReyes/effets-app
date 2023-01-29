import { Usuario } from './../../models/usuario.model';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usurarios: Usuario[] = []

  constructor(private usuarioSerivice : UsuarioService) { }

  ngOnInit(): void {
    this.usuarioSerivice.getUsers().subscribe(
      users =>{
        console.log(users)
        this.usurarios = users;
      }
    )
  }

}
