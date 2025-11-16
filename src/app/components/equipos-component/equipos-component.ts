import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ServiceFutbol } from '../../services/service.futbol';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Jugador } from '../../models/jugador';
import Swal from 'sweetalert2';

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
    private _activeRoute:ActivatedRoute,
    private _router: Router
  ){
    this.carga=false
  }

  ngOnInit(): void {
    this.getDatosEquipo();
  }
  
  getDatosEquipo(): void{
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

  eliminarJugador(idJugador: number): void{
    Swal.fire({
      icon: 'question',
      title: '¿Deseas eliminar el jugador definitivamente?',
      timer: 3000,
      timerProgressBar: true,
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed){
        this._service.deleteJugador(idJugador).subscribe(()=>{
          Swal.fire({
            icon: 'success',
            title: 'Jugador eliminado correctamente',
            timer: 3000,
            timerProgressBar: true
          }).then(()=>{
            this.getDatosEquipo();
          })
        })
      }
    })
  }


}
