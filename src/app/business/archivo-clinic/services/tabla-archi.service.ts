import { Injectable } from '@angular/core';
import Tabla_arch from '../interfaces/Tabla_arch';

@Injectable({
  providedIn: 'root'
})
export class TablaArchiService {
tabla_data: Tabla_arch[]
  constructor() {
    this.tabla_data=
    [{
      expediente: "14423",
      nombre: 'alexs',
      ap_paterno: 'gomez',
      ap_materno: 'torres',
      fecha: '21-02-2019',
      elabora: 'Juanito banana',
      matri: '12012021'
    }]
   }
}
