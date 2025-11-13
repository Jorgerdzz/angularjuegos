import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubirFicheroComponent } from './components/subir-fichero-component/subir-fichero-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SubirFicheroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularjuegos');
}
