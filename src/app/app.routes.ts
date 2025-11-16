import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { BusquedaJugadorComponent } from './components/busqueda-jugador-component/busqueda-jugador-component';
import { SubirFicheroComponent } from './components/subir-fichero-component/subir-fichero-component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "equipos/:id", component: EquiposComponent},
    {path: "jugador/:nombre", component: BusquedaJugadorComponent},
    {path: "upload", component:SubirFicheroComponent}
];
