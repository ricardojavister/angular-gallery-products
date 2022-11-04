import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts$.subscribe(data=> {
      console.log(data);
      this.products = data;
    }
    )
  }

}
