import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable, delay } from "rxjs";
import { Jugador } from "../models/jugador";
import { Equipo } from "../models/equipo";
import { DatosEquipo } from "../models/datosequipo";
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';

@Injectable()
export class ServiceFutbol{

    constructor(
        private _http:HttpClient,
        private _activeRoute:ActivatedRoute
    ){}

    getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>> {
        let request = "api/jugadores/jugadoresequipos/" + idEquipo;
        let url = environment.urlApiEjemplos + request;
        // return this._http.get<Array<Jugador>>(url);
        return this._http.get<Array<Jugador>>(url).pipe(delay(4000));
    }
    
    getJugadorPorNombre(nombreJugador: string): Observable<Array<Jugador>>{
        let url = environment.urlApiEjemplos;
        let request = "api/Jugadores/BuscarJugadores/" + nombreJugador;
        return this._http.get<Array<Jugador>>(url + request);
    }


	findEquipo(idEquipo: number): Observable<Equipo> {
        let request = "api/equipos/" + idEquipo;
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Equipo>(url);
    }

  
    getEquipos(): Observable<Array<Equipo>> {
        let request = "api/equipos";
        let url = environment.urlApiEjemplos + request;
        return this._http.get<Array<Equipo>>(url);
    }

    getDatosEquipo(idEquipo: number): Observable<DatosEquipo>{
        return forkJoin({
            equipo: this.findEquipo(idEquipo),
            jugadores: this.getJugadoresEquipo(idEquipo)
        })
    }

    insertJugador(jugador: Jugador): Observable<any>{
        let url = environment.urlApiEjemplos;
        let request = "api/Jugadores";
        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json")
        return this._http.post(url + request, jugador, {headers: header})
    }

    deleteJugador(idJugador: number): Observable<any>{
        let url = environment.urlApiEjemplos;
        let request = "api/Jugadores/" + idJugador;
        return this._http.delete(url + request)
    }


}