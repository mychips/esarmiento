import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  load = false;

  team: any[] = [];

  constructor( private http: HttpClient) {

    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo(){

    // leer el archivo JSON
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {

        this.load = true;
        this.info = resp;
      });
  }

  private loadTeam(){

    // leer el archivo JSON
    this.http.get('https://porta-mychip.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {

        this.team = resp;
        // console.log( resp );
      });
  }
}
