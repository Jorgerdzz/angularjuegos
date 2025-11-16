import { Component } from '@angular/core';
import { ServiceFichero } from '../../services/service.ficheros';
import { Fichero } from '../../models/fichero';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testingfiles',
  templateUrl: './subir-fichero-component.html',
  styleUrl: './subir-fichero-component.css',
  imports: [FormsModule],
  providers: [ServiceFichero]
})
export class SubirFicheroComponent {

  public fichero: Fichero;
  public base64string: string;
  private file!: File;

  constructor(
    private _service: ServiceFichero
  ){
    this.fichero={
      fileName: "",
      fileContent: ""
    }
    this.base64string =""
  }

  selectedFile(event: any): void{
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const parts = result.split(',');
      if(parts.length===2){
        this.base64string = parts[1]
      }else{
        this.base64string = result;
      }
      // Fichero lista para enviar
      this.fichero.fileName = this.file.name;
      this.fichero.fileContent = this.base64string;
    }
    reader.readAsDataURL(this.file);
  }

  uploadFile(): void{
    this._service.subirFichero(this.fichero).subscribe(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Fichero subido correctamente',
        timer: 3000,
        timerProgressBar: true
      })
    })
  }

}

