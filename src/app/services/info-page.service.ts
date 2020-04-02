import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  load = false;

  constructor( private http: HttpClient) {

    // console.log('Sercicio de pagina listo');

    // leer el archivo JSON
    this.http.get('assets/data/data-page.json')
      .subscribe( resp => {

        this.load = true;
        this.info = resp;
        console.log( resp );

      });

  }
}
