import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Equipo } from '../../models/equipo';
import { ServiceFutbol } from '../../services/service.futbol';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-component',
  imports: [RouterLink, FormsModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
  providers: [ServiceFutbol]
})
export class MenuComponent implements OnInit{

  public equipos!: Array<Equipo>
  public nombreJugador: string;

  constructor(
    private _service:ServiceFutbol,
    private _router:Router
  ){
    this.nombreJugador = ""
  }

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response=>{
      this.equipos = response
    })
  }

  buscarJugador(): void{
    this._router.navigate(['/jugador/' + this.nombreJugador]);
  }

}
