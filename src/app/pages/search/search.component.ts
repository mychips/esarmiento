import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public productService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
        // tslint:disable-next-line: no-string-literal
        console.log(params['term']);
        // tslint:disable-next-line: no-string-literal
        this.productService.searchProduct( params['term'] );
      });
  }

}
