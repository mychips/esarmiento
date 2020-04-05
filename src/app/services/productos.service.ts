import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product.interface';
import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  products: Product[] = [];
  productsFilter: Product[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://porta-mychip.firebaseio.com/productos_idx.json')
      .subscribe( ( resp: Product[]) => {
        this.products = resp;
        this.loading = false;
        resolve();
      });
    });
  }

  getProduct( id: string ) {

    return this.http.get(`https://porta-mychip.firebaseio.com/productos/${ id }.json`)

  }

  searchProduct( term: string ) {
    if ( this.products.length === 0 ) {
      // Cargar productos
      this.loadProducts().then( () => {
        // Ejecutar despues de tener los productos
        // Aplicar filtro
        this.filterProducts( term );
      });
    }else {
      // Aplicar el filtro
      this.filterProducts( term );
    }
  }

  private filterProducts( term: string ) {
    this.productsFilter = [];
    term = term.toLocaleLowerCase();
    // console.log( this.products );
    this.products.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( term ) >= 0 || tituloLower.indexOf( term ) >= 0 ) {
        this.productsFilter.push( prod );
      }
    });
  }
}
