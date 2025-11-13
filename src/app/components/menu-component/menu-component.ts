import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Equipo } from '../../models/equipo';
import { ServiceFutbol } from '../../services/service.futbol';

@Component({
  selector: 'app-menu-component',
  imports: [RouterLink],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
  providers: [ServiceFutbol]
})
export class MenuComponent implements OnInit{

  public equipos!: Array<Equipo>

  constructor(
    private _service:ServiceFutbol
  ){}

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response=>{
      this.equipos = response
    })
  }

}
