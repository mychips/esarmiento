import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Product } from '../../interface/product.interface';
import { ProductDescription } from '../../interface/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductDescription;
  id: string;

  constructor( private route: ActivatedRoute,
               public productService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe( parameters => {
      // tslint:disable-next-line: no-string-literal
      // console.log( parameters['id']);
      // tslint:disable-next-line: no-string-literal
      this.productService.getProduct( parameters['id'] )
        .subscribe( ( product: ProductDescription ) => {
          // tslint:disable-next-line: no-string-literal
          this.id = parameters['id'];
          this.product = product;
        });
    });
  }

}
