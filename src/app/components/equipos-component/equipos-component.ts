import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ServiceFutbol } from '../../services/service.futbol';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-equipos-component',
  imports: [],
  templateUrl: './equipos-component.html',
  styleUrl: './equipos-component.css',
  providers: [ServiceFutbol]
})
export class EquiposComponent implements OnInit{

  public equipo!: Equipo
  public jugadores!: Array<Jugador>
  public carga: boolean;

  constructor(
    private _service:ServiceFutbol,
    private _activeRoute:ActivatedRoute
  ){
    this.carga=false
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params)=>{
      let idEquipo = params['id'];
      this._service.getDatosEquipo(idEquipo).subscribe(result=>{
        this.equipo = result.equipo
        this.jugadores = result.jugadores
        this.carga = true
      })
    })
  }

  resetCarga(): void{
    this.carga = !this.carga
  }


}
