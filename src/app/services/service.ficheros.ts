import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Fichero } from "../models/fichero";

@Injectable()
export class ServiceFichero{

    constructor(private _http:HttpClient){}

    subirFichero(fichero: Fichero): Observable<any>{
        let json = JSON.stringify(fichero)
        let url = environment.urlApiFicheros;
        let request = "api/TestingFiles";
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        return this._http.post(url + request, json, {headers: header})
    }

}