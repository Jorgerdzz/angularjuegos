import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { ServiceFutbol } from '../../services/service.futbol';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-busqueda-jugador-component',
  imports: [],
  templateUrl: './busqueda-jugador-component.html',
  styleUrl: './busqueda-jugador-component.css',
  providers: [ServiceFutbol]
})
export class BusquedaJugadorComponent implements OnInit{

  public jugadores!: Array<Jugador>;

  constructor(
    private _service:ServiceFutbol,
    private _activeRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params)=>{
      let nombreJugador = params['nombre'];
      this._service.getJugadorPorNombre(nombreJugador).subscribe(response=>{
        this.jugadores = response;
      })
    })
    
  }

}
