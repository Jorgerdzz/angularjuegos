import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EquiposComponent } from './components/equipos-component/equipos-component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "equipos/:id", component: EquiposComponent}
];
