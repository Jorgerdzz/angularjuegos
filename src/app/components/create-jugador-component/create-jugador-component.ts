import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';
import { FormsModule } from '@angular/forms';
import { ServiceFutbol } from '../../services/service.futbol';
import { Router } from '@angular/router';
import { Equipo } from '../../models/equipo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-jugador-component',
  imports: [FormsModule],
  templateUrl: './create-jugador-component.html',
  styleUrl: './create-jugador-component.css',
  providers: [ServiceFutbol]
})
export class CreateJugadorComponent implements OnInit{

  public jugador: Jugador;
  public equipos!: Array<Equipo>;

  constructor(
    private _service:ServiceFutbol,
    private _router:Router
  ){
    this.jugador = {
      idJugador: 0,
      nombre: "",
      posicion: "",
      imagen: "",
      fechaNacimiento: "",
      pais: "",
      idEquipo: 0
    }
  }

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos(): void{
    this._service.getEquipos().subscribe(response=>{
      this.equipos = response
    })
  }

  insertJugador(): void{
    console.log(this.jugador)
    this._service.insertJugador(this.jugador).subscribe((jugador)=>{
      Swal.fire({
        icon: 'success',
        title: 'Jugador creado correctamente',
        timer: 3000,
        timerProgressBar: true,
      }).then(()=>{
        this._router.navigate(['/equipos/' + this.jugador.idEquipo])
      })
    })
  }

}
