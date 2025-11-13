import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceFichero } from '../../services/service.ficheros';
import { Fichero } from '../../models/fichero';

@Component({
  selector: 'app-testingfiles',
  templateUrl: './testingfiles.component.html',
  styleUrl: './testingfiles.component.css'
})
export class SubirFicheroComponent implements OnInit {
  @ViewChild("cajafile") cajaFileRef!: ElementRef;
  public fileContent: string;
  public urlFileUpload!: string;
  constructor(private _service: ServiceFichero) {
    this.fileContent = "";
  }
  ngOnInit(): void {
    
  }
  subirFichero(): void{
    //ESTE ES EL FICHERO QUE DEBEMOS LEER
    var file = this.cajaFileRef.nativeElement.files[0];
    //ELIMINAMOS LAS BARRAS QUE INCLUYE EL TIPO FILE EN EL NAME
    //YA QUE VIENE LA RUTA Y NECESITAMOS EL NOMBRE DEL FICHERO
    var miPath = this.cajaFileRef.nativeElement.value.split("\\");
    //NOS QUEDAMOS CON EL ULTIMO VALOR, QUE ES EL NOMBRE DEL FILE
    var ficheroNombre = miPath[2];
    console.log(ficheroNombre);
    //CREAMOS UN LECTOR PARA LEER EL FICHERO
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      var base64: string;
      //LA FUNCION btoa CONVIERTE BYTES A BASE64
      base64 = btoa(
        new Uint8Array(buffer)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      
      this.fileContent = base64;
      var newFileModel = 
        new Fichero(ficheroNombre, base64);
        this._service.subirFichero(newFileModel).subscribe(response => {
          console.log(response);
          this.urlFileUpload = response.urlFile;
        })
    };
  }
}

