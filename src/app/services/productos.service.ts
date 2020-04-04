import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  products: Product[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {

    this.http.get('https://porta-mychip.firebaseio.com/productos_idx.json')
      .subscribe( ( resp: Product[]) => {

        console.log(resp);
        this.products = resp;
        this.loading = false;
      });
  }
}
