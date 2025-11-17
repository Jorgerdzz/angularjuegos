import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Jugador } from '../../models/jugador';
import { Equipo } from '../../models/equipo';
import { ServiceFutbol } from '../../services/service.futbol';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fichajes-component',
  imports: [FormsModule],
  templateUrl: './fichajes-component.html',
  styleUrl: './fichajes-component.css',
  providers: [ServiceFutbol]
})
export class FichajesComponent implements OnInit{

  public jugadores!: Array<Jugador>;
  public equipos!: Array<Equipo>;
  public idJugador: number;
  public idEquipo: number;

  constructor(
    private _service:ServiceFutbol,
    private _router:Router
  ){
    this.idJugador = 0;
    this.idEquipo = 0;
  }

  ngOnInit(): void {
    this.loadJugadores();
    this.loadEquipos();
  }

  loadJugadores(): void{
    this._service.getJugadores().subscribe(response=>{
      this.jugadores = response
    })
  }

  loadEquipos(): void{
    this._service.getEquipos().subscribe(response=>{
      this.equipos = response;
    })
  }

  traspasarJugador(): void{
    this._service.traspasarJugador(this.idJugador, this.idEquipo).subscribe(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Jugador traspasado correctamente',
        timer: 3000,
        timerProgressBar: true
      }).then(()=>{
        this._router.navigate(['/equipos/' + this.idEquipo]);
      })
    })
  }

}
